import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [openCardVideo, setOpenCardVideo] = useState(false);
  // console.log(showErrorMessage);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const changePassword = (value) => {
    setPassword(value);

    if (value === "" && showErrorMessage === true) {
      setErrorPasswordMessage(true);
    } else {
      setErrorPasswordMessage(false);
    }
  };
  const changeEmail = (value) => {
    setEmail(value);

    if (value === "" && showErrorMessage === true) {
      setErrorEmailMessage(true);
    } else {
      setErrorEmailMessage(false);
    }
  };
  const showMessage = (e) => {
    e.preventDefault();
    if (showErrorMessage === true) {
      console.log(showErrorMessage);
      if (email === "") {
        setErrorEmailMessage(true);
      } else {
        setErrorEmailMessage(false);
      }
      if (password === "") {
        setErrorPasswordMessage(true);
      } else {
        setErrorPasswordMessage(false);
      }
    }
  };

  useEffect(() => {
    if (showErrorMessage === true) {
      // console.log(showErrorMessage);
      if (email === "") {
        setErrorEmailMessage(true);
      } else {
        setErrorEmailMessage(false);
      }
      if (password === "") {
        setErrorPasswordMessage(true);
      } else {
        setErrorPasswordMessage(false);
      }
    }
  }, [showErrorMessage]);

  return (
    <>
      <div className="relative w-full">
        <nav className="flex justify-end w-full  md:pt-2    ">
          <div className="">
            <img src="/logo.svg" alt="logo" />
          </div>
        </nav>
        <div className=" flex  items-center flex-col gap-3 justify-between md:min-h-screen md:bg-[url('./assets/images/background.png')] bg-no-repeat  bg-center  px-0	w-full p-4 md:p-0 ">
          <form className="flex  flex-col pb-8 px-5  pt-8 shadow-[0_0_10px_0_rgba(8,143,196,0.25)] md:px-12 md:pb-12  md:mt-6 md:pt-16 h-[500px] md:h-[600px]  w-[107%]   md:w-[400px]">
            <h1 className="md:mb-16 mb-10 text-center text-[27px] font-bold text-[#088FC4] md:text-[40px]">
              تسجيل الدخول
            </h1>
            <div className="flex flex-col  w-full h-full justify-between">
              <div className="flex flex-col   flex-1">
                <div>
                  <input
                    type="email"
                    required
                    id="email_address"
                    onChange={(e) => changeEmail(e.target.value)}
                    placeholder="ادخل بريدك الالكتروني"
                    className="  mb-2  border-[#088FC4] placeholder:text-[#98A2B3] min-h-[50px] w-full rounded-[10px] border px-3 text-right text-[16px] outline-none  md:min-h-[50px] md:text-[18px]"
                  />
                  {errorEmailMessage === true && (
                    <p className="    text-red-500 text-end ">
                      هذا الحقل مطلوب
                    </p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    required
                    id="password"
                    placeholder="ادخل كلمة المرور "
                    className=" mt-2 mb-2 appearance-none   border-[#088FC4] placeholder:text-[#98A2B3] min-h-[50px] w-full rounded-[10px] border px-3 text-right text-[16px] outline-none  md:min-h-[50px] md:text-[18px]"
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="absolute left-3 top-[64%] translate-y-[-100%]"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="text-[#088FC4] text-[18px] md:text-[20px] cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                    </svg>
                  </div>
                </div>
                {errorPasswordMessage === true && (
                  <p className=" mb-2  text-red-500 text-end ">
                    هذا الحقل مطلوب
                  </p>
                )}

                <a
                  href="#"
                  className=" mt-2 mb-4  text-[#088FC4] underline  ms-auto "
                >
                  هل نسيت كلمة المرور
                </a>
              </div>

              <div className="">
                <div className="  ">
                  <button
                    onClick={(e) => {
                      setShowErrorMessage(true);
                      showMessage(e);
                    }}
                    className="mb-2  min-h-[50px] w-full rounded-[10px] bg-[#088FC4] text-center text-[16px] text-white disabled:cursor-not-allowed disabled:opacity-50 md:min-h-[60px] md:text-[20px]"
                  >
                    تسجيل الدخول
                  </button>
                </div>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="text-[#088FC4] underline cursor-pointer"
                  >
                    انشاء حساب جديد
                  </a>
                  <span>ليس لديك حساب؟</span>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className=" absolute md:left-[-40px] left-[-20px] top-0 md:top-4 z-[100]">
          <div className="">
            {openCardVideo === false ? (
              <svg
                onClick={() => setOpenCardVideo(false)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="1.25em"
                width="1.25em"
                className="absolute right-[0px] z-50 cursor-pointer text-lg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                onClick={() => setOpenCardVideo(false)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="1.25em"
                width="1.25em"
                className="absolute right-[-30px] z-50 cursor-pointer text-lg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>
          <div
            onClick={() => setOpenCardVideo(true)}
            className=" absolute w-full h-full left-0 top-0 z-50"
          ></div>
          {openCardVideo === false ? (
            <iframe
              src="https://www.youtube.com/embed/gt4CFLq9ars"
              className="rounded-full h-[100px] md:h-[150px] w-[100px] md:w-[150px] z-[-1] relative"
            ></iframe>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/gt4CFLq9ars"
              className="w-[300px] h-[400px] md:h-[600px] clicked z-[60] relative"
            ></iframe>
          )}
        </div>
      </div>

      <footer className="flex justify-between items-center  md:mt-3 flex-col-reverse md:flex-row gap-2">
        <div className="flex items-center gap-2">
          <span>لتقنية المعلومات </span>
          <img src="/assets/images/footer.png" alt="" />
          <span>تطوير و تشغيل </span>
        </div>
        <p>جميع الحقوق محفوظة © تكنكة 2023</p>
      </footer>
    </>
  );
}

export default App;
