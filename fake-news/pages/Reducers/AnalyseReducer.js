const initialState = {
    data: "hey",
    isFetching: false,
    isError: false,
  };

const AnalyseReducer = (state = initialState, action) => {
    switch (action.type) {
      case "START_ANALYSE":
        return {
          data: "hey",
          isFetching: true,
          isError: false,
        };
      case "SUCCESS_ANALYSE":
        return {
          data: action.payload,
          isFetching: false,
          isError: false,
        };
      case "FAILED_ANALYSE":
        return {
          data: "hey",
          isFetching: false,
          isError: action.payload,
        };
      default:
        return state;
    }
  };

  export default AnalyseReducer;