import type { OnBoardingData } from "../types/onBoarding";

import img1 from "../assets/images/onBoarding_1.png";
import img2 from "../assets/images/onBoarding_2.png";
import img3 from "../assets/images/onBoarding_3.png";
import img4 from "../assets/images/onBoarding_4.png";

export const ONBOARDING_DATA: OnBoardingData[] = [
  {
    id: 1,
    title: "반려동물과 함께\n소중한 추억을\n담는 곳.",
    image: img1,
  },
  {
    id: 2,
    title: "반려동물과의 일상 감정을\n기록하고 관리하는 감정 일기💖",
    image: img2,
  },
  {
    id: 3,
    title:
      "반려동물과의 추억이 담긴\n사진과 동영상을 모아볼 수 있는\n추억 갤러리📚",
    image: img3,
  },
  {
    id: 4,
    title: "등록만 하면 기념일 알림이🔔\n반려동물 전용 리마인드 캘린더📆",
    image: img4,
  },
];
