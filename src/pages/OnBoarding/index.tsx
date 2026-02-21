import { useEffect, useState } from "react";

import { ONBOARDING_DATA } from "../../constants/onBoarding";

export default function OnBoarding() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const isSplash = currentStep === 0;
  const isLastStep = currentStep === ONBOARDING_DATA.length - 1;
  const { title, image } = ONBOARDING_DATA[currentStep];

  const handleNextStep = () => {
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
    else alert("메인 페이지로 이동");
  };

  const handleDotClick = (index: number) => {
    setCurrentStep(index + 1);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 6000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="h-screen w-full max-w-125 bg-gray-100 mx-auto">
      <div
        className={`relative h-full w-full overflow-hidden bg-[#8047F2] text-white flex flex-col justify-between transition-all duration-700
          ${isSplash ? "p-14" : "p-9"}`}
      >
        <div className="w-full flex flex-col">
          {!isSplash && <button className="self-end mb-8">로그인</button>}

          <h1
            className={`${isSplash ? "text-[40px] font-bold" : "text-[20px] font-semibold"}`}
          >
            {title}
          </h1>
        </div>

        <div>
          <div
            className={`relative flex items-center justify-center w-full ${!isSplash && "flex-1"}`}
          >
            <img
              key={`img-${currentStep}`}
              src={image}
              alt="content_image"
              className={`
              transition-all duration-700 object-cover animate-in fade-in zoom-in-95
              ${
                isSplash
                  ? "absolute -right-36 bottom-0 w-124 max-w-none transform translate-x-10 translate-y-10 rotate-[-5deg]"
                  : "w-80 opacity-100"
              }
            `}
            />
          </div>

          {!isSplash && (
            <div className="mt-2 flex justify-center items-center gap-2">
              {ONBOARDING_DATA.slice(1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentStep === index + 1
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {!isSplash && (
          <div>
            <button className="w-full py-4 text-[#D5D4DF]">건너뛰기</button>

            <button
              onClick={handleNextStep}
              className="w-full py-4 bg-white rounded-md text-[#8047F2]"
            >
              {isLastStep ? "시작하기" : "다음으로"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
