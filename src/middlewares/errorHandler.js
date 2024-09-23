export const errorHandler = (err, req, res, next) => {
  res.status(err.status).json({
    message: 'Something went wrong',
    error: err.message,
    data: err,
  });
};
