import Button from "../components/Button";
import Input from "../components/Input";

const Auth = () => {
  return (
    <div className="flex justify-center items-center bg-slate-400 w-full flex-1 auth">
      <div className="card w-1/3">
        <div className="py-2">
          <p className="text-xl font-semibold">Create an account</p>
        </div>
        <div className="py-1 space-y-6">
          <div className="flex flex-col justify-between items-start space-y-1">
            <label htmlFor="name" className="font-semibold text-gray-700 label">
              Name
            </label>
            <Input
              className={"input-primary"}
              placeholder={"Enter name"}
              type={"text"}
            />
          </div>

          <div className="flex flex-col justify-between items-start space-y-1">
            <label
              htmlFor="email"
              className="font-semibold text-gray-700 label"
            >
              Email
            </label>
            <Input
              className={"input-primary"}
              type={"email"}
              placeholder={"Enter email"}
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded
               bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900
             dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="flex justify-between py-3 my-2">
          <Button Class={"btn-primary"} text={"Create an account"} />
        </div>
        <div className="my-2">
          <p className="text-sm ">
            Already have an account?{" "}
            <a href="#" className="text-blue-600">
              Sign in
            </a>
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
