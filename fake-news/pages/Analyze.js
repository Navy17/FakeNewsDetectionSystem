import { useState } from "react";
import { ApiCallSentence } from "./api/ApiCall";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
function Analyze() {
  const router = useRouter();
  const state = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [sentence,setSentence]=useState("");
  const handleSentence = async (e) => {
    e.preventDefault()
    ApiCallSentence({
      "sentence": sentence,
    }, dispatch);
    router.push("/Reveal")
  };
  return (
    <div className="Container">
      <div className="input-c">
        <div className="sear">
          <h2>LETS GET INTO THE WORLD OF TRUTHS! 🔦</h2>
          <br />
          <br />
          <textarea
            className="textarea"
            placeholder="Lets get to know the truth behind it..."
            value={sentence}
                  onChange={(e) => setSentence(e.target.value)}
          ></textarea>
        </div>
        <br />

        <div className="search">
          <button className="btn-A" onClick={handleSentence}>
            <a href="">Reveal the truth behind it...</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Analyze;
