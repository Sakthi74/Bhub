import pdp from "../assets/pdp.jpg";
const Register = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen  bg-gradient-to-br from-secondary to-primary ">
        <div className="flex  items-center h-[500px]  bg-primary shadow-2xl w-[950px]">
          <div className=" justify-center items-center grid grid-cols-4  p-4 ">
            <img src={pdp} className="grid col-span-3 h-[400px]"></img>

            <div className=" flex justify-center items-center grid grid-row-6 p-12 border-black border-2 p-5">
              <h1 className="ml-12 p-3">Register</h1>
              <form className="grid grid-flow-row grid-span-1  gap-4">
                <input
                  type="email "
                  placeholder="Enter your MailID"
                  className="   rounded-xl p-1  grid-span-1 "
                ></input>
                <input
                  type="email "
                  placeholder="Enter your MailID"
                  className="  rounded-xl p-1  grid-span-1  "
                ></input>
                <input
                  type="email "
                  placeholder="Enter your MailID"
                  className="  rounded-xl p-1  grid-span-1"
                ></input>
                <input
                  type="email "
                  placeholder="Enter your MailID"
                  className="   rounded-xl p-1  grid-span-1 "
                ></input>
                <input
                  type="email "
                  placeholder="Enter your MailID"
                  className="  rounded-xl p-1  grid-span-1  "
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
