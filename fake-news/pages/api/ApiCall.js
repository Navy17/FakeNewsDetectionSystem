import axios from "axios";
import { startLogin, successLogin, failedLogin, startAnalyse, successAnalyse, failedAnalyse } from "../Actions/Actions";

export const ApiCallReg = async (userCredentials, dispatch) => {
  dispatch(startLogin());
  try {
    const user = await axios.post(
      "http://localhost:8800/api/auth/adduser",
      userCredentials
    );
    dispatch(successLogin(user.data, user.statusCheck));
  } catch (err) {
    dispatch(failedLogin(err));
  }
};

export const ApiCallCheck = async (userCredentials, dispatch) => {
  dispatch(startLogin());
  try {
    const user = await axios.post(
      "http://localhost:8800/api/auth/login",
      userCredentials
    );
    dispatch(successLogin(user.data));
    // console.log(user.data);
  } catch (err) {
    dispatch(failedLogin(err));
    console.log(err);
  }
};

export const ApiCallLoginWithGoogle = async (userCredentials, dispatch) => {
  dispatch(startLogin());
  try {
    const user = await axios.post(
      "http://localhost:8800/api/auth/loginWithGoogle",
      userCredentials
    );
    dispatch(successLogin(user.data));
    // console.log(user);
  } catch (err) {
    dispatch(failedLogin(err));
    console.log(err);
  }
};

export const ApiCallComment = async (userCredentials) => {
  try {
    const user = await axios.post(
      "http://localhost:8800/api/auth/comment",
      userCredentials
    );
    //console.log(user.data);
  } catch (err) {
    console.log(err);
  }
};
export const ApiCallSentence = async (userCredentials , dispatch) => {
  dispatch(startAnalyse());
  try {
    const prediction = await axios.post(
      "http://127.0.0.1:5000/api/v1/predict",
      userCredentials
    );
    dispatch(successAnalyse(prediction.data));
    // console.log(prediction)
  } catch (err) {
    console.log(err);
    dispatch(failedAnalyse(err));
  }
};