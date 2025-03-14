import React, { useState } from "react";

function CalculatorComponent() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState(1);

  const tipTotal = bill && people ? (bill * (tip / 100)) / people : 0;
  const peopleTotal = bill && people ? bill / people + tipTotal : 0;

  const reset = () => {
    setBill("");
    setTip("");
    setPeople(1);
  };

  return (
    <>
      <div className="calcultorContainer w-[90%] h-[75%] lg:h-[95%] transition-all duration-300  lg:w-[95%] lg:flex lg:items-center lg:justify-center lg:gap-5 pt-32">
        <div className=" calculator bg-white p-6 rounded-lg shadow-lg  flex">
          <div className=" p-4">
            <label className=" titleText  mb-2 text-gray-700">Bill</label>
            <div className="relative">
              <img
                src="/assets/icon-dollar.svg"
                alt="User Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(parseFloat(e.target.value) || "")}
                className="billContent w-full p-2 border rounded placeholder:text-left"
                placeholder=""
              />
            </div>

            <label className="selectText pt-11 block mt-4 mb-2 text-gray-700">
              Select Tip %
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[5, 10, 15, 25, 50].map((percent) => (
                <button
                  key={percent}
                  onClick={() => setTip(percent)}
                  className={`tipbutton ${tip === percent ? "active" : ""}`}
                >
                  {percent}%
                </button>
              ))}
              <input
                type="number"
                value={tip}
                onChange={(e) => setTip(parseFloat(e.target.value) || 0)}
                className="percentInput w-full p-2 border rounded placeholder:text-center"
                placeholder="Custom %"
              />
            </div>

            <label className=" peopleText pt-9 block mt-4 mb-2 text-gray-700">
              Number of People
            </label>
            <div className="relative">
              <img
                src="/assets/icon-person.svg"
                alt="User Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="number"
                value={people}
                onChange={(e) =>
                  setPeople(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="peopleInput w-full h-full p-2 pl-10 border rounded"
              />
            </div>
          </div>

          <div className=" resultContainer w-1/2 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <p className="resultAmount text-lg">Tip Amount</p>
              <p className="resultAmount2">/ person:</p>
              <p className="sumAmount text-3xl font-bold text-end">
                ${tipTotal.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="resultTotal text-lg">Total</p>
              <p className="resultTotal2">/ person:</p>
              <p className="sumTotal text-3xl font-bold text-green-400 text-end">
                ${peopleTotal.toFixed(2)}
              </p>
            </div>

            <button
              onClick={reset}
              className="resetBtn w-full p-2 rounded mt-4"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorComponent;
