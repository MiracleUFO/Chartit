class Responses {
  constructor(res) {
      this.res = res
  }

  /**
   * Error Response
   * @param {status} [Number] - The status/error code of the response i.e 200, 404, 500
   * @param {type} [String] - The type of error being generated i.e emailValidationError,
   * @param {message} [String] - A short message to be display to user
   * @param {err} [Object] - The error object
   */
  error(status = 400, type, message, err) {
      this.res.status(status).json({
          success: false,
          error: {
              code: status,
              type,
              message,
              err
          }
      })
  }

  /**
   * Success Response
   * @param {string} message
   * @param {object} data
   */
  success(message, data, status = 200) {
      this.res.status(status).json({
          success: true,
          message,
          data
      })
  }

}

module.exports = (res) => new Responses(res);
