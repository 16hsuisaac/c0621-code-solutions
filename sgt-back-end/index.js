const pg = require('pg');
const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200);
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const score = parseFloat(req.body.score);
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be an integer between 0-100'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: '"name" must be provided'
    });
    return;
  } else if (!req.body.course) {
    res.status(400).json({
      error: '"course" must be provided'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(result => {
      res.status(200);
      const input = result.rows[0];
      res.json(input);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseFloat(req.params.gradeId);
  const score = parseFloat(req.body.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be an integer between 0-100'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: '"name" must be provided'
    });
    return;
  } else if (!req.body.course) {
    res.status(400).json({
      error: '"course" must be provided'
    });
    return;
  }
  const sql = `
    update "grades"
    set "name" = $2,
        "course" = $3,
        "score" = $4
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200);
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseFloat(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
      delete from "grades"
        where "gradeId" = $1
      returning *;
  `;
  const params = [req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      const deleted = result.rows[0];
      if (!deleted) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204);
        res.json(deleted);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});
