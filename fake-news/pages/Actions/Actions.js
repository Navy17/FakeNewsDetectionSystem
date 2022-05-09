export const startLogin = () => {
  return {
    type: "START_LOGIN",
  };
};

export const successLogin = (user) => {
  return {
    type: "SUCCESS_LOGIN",
    payload: user,
  };
};

export const failedLogin = (error) => {
  return {
    type: "FAILED_LOGIN",
    payload: error,
  };
};

export const startAnalyse = () => {
  return {
    type: "START_ANALYSE",
  };
};

export const successAnalyse = (user) => {
  return {
    type: "SUCCESS_ANALYSE",
    payload: user,
  };
};

export const failedAnalyse = (error) => {
  return {
    type: "FAILED_ANALYSE",
    payload: error,
  };
};
