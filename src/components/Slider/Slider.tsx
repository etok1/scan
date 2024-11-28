import React, { useState } from "react";
import style from "./style.module.css";
import Slide from "./Slide/Slide";
import { transform } from "typescript";

const Slider = () => {
  const slides = [
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_1291"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <rect width="64" height="64" fill="url(#pattern0_1_1291)" />
        </mask>
        <g mask="url(#mask0_1_1291)">
          <rect x="-1" y="-8" width="65" height="79" fill="#029491" />
        </g>
        <defs>
          <pattern
            id="pattern0_1_1291"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1291" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_1_1291"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVR4nO2b3YuUVRzHP9u4K7r2MrujkNnu0kWm67ZhXkQIlRBSFBgsSBZeZd2I0V1p9TcoCmFEYFCKNxKJSYHetBU49qKx7RquFyJI7RahOVu5s178npHn+T1vM+ec56zifOCBPfM88/19z9lzznPeBtq0adPGDwPAXJPXgC9Td/kKBDxd0LNW+CyApwp69rbhAs03gQvz5LHNHUeHpzh9wAZgHbAS6eV7gSXB/avANFL1zwGngBPARU/+CqEfeBf4lebbvr7GgF2B1m3DEPAJcB3zjOtrFvgCqUG3LD3AfqCOu4zrq44U7jJPeWqazcCfpBuvIW36PWATsAooA53BVQ4+2wS8Hzw7k6E3DYx4yVkOXcAHpBs9BbwG3GugfR+wDahm6O9DCnBe6AaOpxirAs86jLUR+CEl1rHAi1e6gW8TzPwDbAdKBcQsATuAawlxR/FYCF0k/+fHgEEP8YeA8YT4x/DUHJLa/CjSkbVKLbhapYfkGrjXQKslNicEHQUWG2gtCmksMvh+WjMs7O2wjPirbgyz/zzA8pDOckONXuLNYRqoGOplckAFqgHDFnqDIa3VFjprkM437O0jC71EHiM+wttuqbk+pLXeUutNot7qSGfpjMMqQBX7V92LIb0XLLVKxMcJn1lq3mQAmYyExV0McraG9LY60HuOqMfryDQ8k2bWBF9Vz1WBrw0Masopf5vyJVILGpQQ75k0UwCvqPT+Fkxl4boAIO5ti61gH/Ge32Rik8SekO4eR5pl4F+inldkfSGvBmxQ6e+Av03dKYqoAX8hHsPoPETIK4DHVfpkq44yKKIAIO5R5yFCXgGsVOkzLdtJpg8ZwDRYg7t1P+1R56ElzhNtT4/YiAX0I8NVPYafwk0hrFa6v9mITSmxXlt3wEHimXc5eKkozT9sxHSP2mXrLjCUVgBWZgMWKs2ZrId9bo42mM24V/fmIiCvAK6q9JLEp1rjq4x7xx3o36PSV2zEdCe4ykYs4CHgMvHqfzm4Z0t4mp3bCebVgPMq/bC5r5tMAk8Ch4Dfg+tg8NmkA33tUechwoIcsQmiM79h4HMDU5pJ4GUHOknoRZqJrIfzasBplfZ2dMWCZ1S6aiOmJ0MzyI7NrUrSZOgBW9ExJbjNVrBA3iDq9awL0V1K1KpKFUgH8WWxt10I9xPf69/oQtgxzxNfEnvQlfghJX6G/DeIT0rAT0Q9fuoywKPEl8V3uAxgyVtEvc1SwD7lxypIDdkvmG+GiO8Yf1hEoKXE5/HjuJkim1JBTpXpGWVhnkZUsDlkg9L7AYUg5vfKSx14qejA+0guBJ81oYIsfmofu30E70QOI+jg4zjej0thmHi1nwOO4vHN1I2cC9AmriEblUUckVmA9Pa1hLjfYHZGwYpukmvCHPAjslfngg5kkPNzSqyjzEPmG3Qix1LS1vhOI+Nzk3X/cvDdtNNhdaTNW1V7V4elR5B9uZ6U+/8hndZJZBR5DlkBaixX3Q3cjyxmDCG7OU+Qvgg7BbwOHHHg3Rk9yB6f3kp3eTWOyi71lCcjBhGT/+Mu443D0ms95sOaPmAn8AvmGT8LvIPDWZ3G1w8mVhD/wUSF6A8mppAfTEwgaw4ngEue/LVp0+YO5QbkJEUZhK6kegAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <h2>Высокая и оперативная скорость обработки заявки.</h2>
    </>,
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_1291"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <rect width="64" height="64" fill="url(#pattern0_1_1291)" />
        </mask>
        <g mask="url(#mask0_1_1291)">
          <rect x="-1" y="-8" width="65" height="79" fill="#029491" />
        </g>
        <defs>
          <pattern
            id="pattern0_1_1291"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1291" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_1_1291"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVR4nO2b3YuUVRzHP9u4K7r2MrujkNnu0kWm67ZhXkQIlRBSFBgsSBZeZd2I0V1p9TcoCmFEYFCKNxKJSYHetBU49qKx7RquFyJI7RahOVu5s178npHn+T1vM+ec56zifOCBPfM88/19z9lzznPeBtq0adPGDwPAXJPXgC9Td/kKBDxd0LNW+CyApwp69rbhAs03gQvz5LHNHUeHpzh9wAZgHbAS6eV7gSXB/avANFL1zwGngBPARU/+CqEfeBf4lebbvr7GgF2B1m3DEPAJcB3zjOtrFvgCqUG3LD3AfqCOu4zrq44U7jJPeWqazcCfpBuvIW36PWATsAooA53BVQ4+2wS8Hzw7k6E3DYx4yVkOXcAHpBs9BbwG3GugfR+wDahm6O9DCnBe6AaOpxirAs86jLUR+CEl1rHAi1e6gW8TzPwDbAdKBcQsATuAawlxR/FYCF0k/+fHgEEP8YeA8YT4x/DUHJLa/CjSkbVKLbhapYfkGrjXQKslNicEHQUWG2gtCmksMvh+WjMs7O2wjPirbgyz/zzA8pDOckONXuLNYRqoGOplckAFqgHDFnqDIa3VFjprkM437O0jC71EHiM+wttuqbk+pLXeUutNot7qSGfpjMMqQBX7V92LIb0XLLVKxMcJn1lq3mQAmYyExV0McraG9LY60HuOqMfryDQ8k2bWBF9Vz1WBrw0Masopf5vyJVILGpQQ75k0UwCvqPT+Fkxl4boAIO5ti61gH/Ge32Rik8SekO4eR5pl4F+inldkfSGvBmxQ6e+Av03dKYqoAX8hHsPoPETIK4DHVfpkq44yKKIAIO5R5yFCXgGsVOkzLdtJpg8ZwDRYg7t1P+1R56ElzhNtT4/YiAX0I8NVPYafwk0hrFa6v9mITSmxXlt3wEHimXc5eKkozT9sxHSP2mXrLjCUVgBWZgMWKs2ZrId9bo42mM24V/fmIiCvAK6q9JLEp1rjq4x7xx3o36PSV2zEdCe4ykYs4CHgMvHqfzm4Z0t4mp3bCebVgPMq/bC5r5tMAk8Ch4Dfg+tg8NmkA33tUechwoIcsQmiM79h4HMDU5pJ4GUHOknoRZqJrIfzasBplfZ2dMWCZ1S6aiOmJ0MzyI7NrUrSZOgBW9ExJbjNVrBA3iDq9awL0V1K1KpKFUgH8WWxt10I9xPf69/oQtgxzxNfEnvQlfghJX6G/DeIT0rAT0Q9fuoywKPEl8V3uAxgyVtEvc1SwD7lxypIDdkvmG+GiO8Yf1hEoKXE5/HjuJkim1JBTpXpGWVhnkZUsDlkg9L7AYUg5vfKSx14qejA+0guBJ81oYIsfmofu30E70QOI+jg4zjej0thmHi1nwOO4vHN1I2cC9AmriEblUUckVmA9Pa1hLjfYHZGwYpukmvCHPAjslfngg5kkPNzSqyjzEPmG3Qix1LS1vhOI+Nzk3X/cvDdtNNhdaTNW1V7V4elR5B9uZ6U+/8hndZJZBR5DlkBaixX3Q3cjyxmDCG7OU+Qvgg7BbwOHHHg3Rk9yB6f3kp3eTWOyi71lCcjBhGT/+Mu443D0ms95sOaPmAn8AvmGT8LvIPDWZ3G1w8mVhD/wUSF6A8mppAfTEwgaw4ngEue/LVp0+YO5QbkJEUZhK6kegAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <h2>
        Огромная комплексная база данных, обеспечивающая объективный ответ на
        запрос.
      </h2>
    </>,
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_1291"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <rect width="64" height="64" fill="url(#pattern0_1_1291)" />
        </mask>
        <g mask="url(#mask0_1_1291)">
          <rect x="-1" y="-8" width="65" height="79" fill="#029491" />
        </g>
        <defs>
          <pattern
            id="pattern0_1_1291"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1291" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_1_1291"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVR4nO2b3YuUVRzHP9u4K7r2MrujkNnu0kWm67ZhXkQIlRBSFBgsSBZeZd2I0V1p9TcoCmFEYFCKNxKJSYHetBU49qKx7RquFyJI7RahOVu5s178npHn+T1vM+ec56zifOCBPfM88/19z9lzznPeBtq0adPGDwPAXJPXgC9Td/kKBDxd0LNW+CyApwp69rbhAs03gQvz5LHNHUeHpzh9wAZgHbAS6eV7gSXB/avANFL1zwGngBPARU/+CqEfeBf4lebbvr7GgF2B1m3DEPAJcB3zjOtrFvgCqUG3LD3AfqCOu4zrq44U7jJPeWqazcCfpBuvIW36PWATsAooA53BVQ4+2wS8Hzw7k6E3DYx4yVkOXcAHpBs9BbwG3GugfR+wDahm6O9DCnBe6AaOpxirAs86jLUR+CEl1rHAi1e6gW8TzPwDbAdKBcQsATuAawlxR/FYCF0k/+fHgEEP8YeA8YT4x/DUHJLa/CjSkbVKLbhapYfkGrjXQKslNicEHQUWG2gtCmksMvh+WjMs7O2wjPirbgyz/zzA8pDOckONXuLNYRqoGOplckAFqgHDFnqDIa3VFjprkM437O0jC71EHiM+wttuqbk+pLXeUutNot7qSGfpjMMqQBX7V92LIb0XLLVKxMcJn1lq3mQAmYyExV0McraG9LY60HuOqMfryDQ8k2bWBF9Vz1WBrw0Masopf5vyJVILGpQQ75k0UwCvqPT+Fkxl4boAIO5ti61gH/Ge32Rik8SekO4eR5pl4F+inldkfSGvBmxQ6e+Av03dKYqoAX8hHsPoPETIK4DHVfpkq44yKKIAIO5R5yFCXgGsVOkzLdtJpg8ZwDRYg7t1P+1R56ElzhNtT4/YiAX0I8NVPYafwk0hrFa6v9mITSmxXlt3wEHimXc5eKkozT9sxHSP2mXrLjCUVgBWZgMWKs2ZrId9bo42mM24V/fmIiCvAK6q9JLEp1rjq4x7xx3o36PSV2zEdCe4ykYs4CHgMvHqfzm4Z0t4mp3bCebVgPMq/bC5r5tMAk8Ch4Dfg+tg8NmkA33tUechwoIcsQmiM79h4HMDU5pJ4GUHOknoRZqJrIfzasBplfZ2dMWCZ1S6aiOmJ0MzyI7NrUrSZOgBW9ExJbjNVrBA3iDq9awL0V1K1KpKFUgH8WWxt10I9xPf69/oQtgxzxNfEnvQlfghJX6G/DeIT0rAT0Q9fuoywKPEl8V3uAxgyVtEvc1SwD7lxypIDdkvmG+GiO8Yf1hEoKXE5/HjuJkim1JBTpXpGWVhnkZUsDlkg9L7AYUg5vfKSx14qejA+0guBJ81oYIsfmofu30E70QOI+jg4zjej0thmHi1nwOO4vHN1I2cC9AmriEblUUckVmA9Pa1hLjfYHZGwYpukmvCHPAjslfngg5kkPNzSqyjzEPmG3Qix1LS1vhOI+Nzk3X/cvDdtNNhdaTNW1V7V4elR5B9uZ6U+/8hndZJZBR5DlkBaixX3Q3cjyxmDCG7OU+Qvgg7BbwOHHHg3Rk9yB6f3kp3eTWOyi71lCcjBhGT/+Mu443D0ms95sOaPmAn8AvmGT8LvIPDWZ3G1w8mVhD/wUSF6A8mppAfTEwgaw4ngEue/LVp0+YO5QbkJEUZhK6kegAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <h2>
        Защита конфеденциальных сведений, не подлежащих разглашению по
        федеральному законодательству.
      </h2>
    </>,
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_1291"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <rect width="64" height="64" fill="url(#pattern0_1_1291)" />
        </mask>
        <g mask="url(#mask0_1_1291)">
          <rect x="-1" y="-8" width="65" height="79" fill="#029491" />
        </g>
        <defs>
          <pattern
            id="pattern0_1_1291"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1291" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_1_1291"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVR4nO2b3YuUVRzHP9u4K7r2MrujkNnu0kWm67ZhXkQIlRBSFBgsSBZeZd2I0V1p9TcoCmFEYFCKNxKJSYHetBU49qKx7RquFyJI7RahOVu5s178npHn+T1vM+ec56zifOCBPfM88/19z9lzznPeBtq0adPGDwPAXJPXgC9Td/kKBDxd0LNW+CyApwp69rbhAs03gQvz5LHNHUeHpzh9wAZgHbAS6eV7gSXB/avANFL1zwGngBPARU/+CqEfeBf4lebbvr7GgF2B1m3DEPAJcB3zjOtrFvgCqUG3LD3AfqCOu4zrq44U7jJPeWqazcCfpBuvIW36PWATsAooA53BVQ4+2wS8Hzw7k6E3DYx4yVkOXcAHpBs9BbwG3GugfR+wDahm6O9DCnBe6AaOpxirAs86jLUR+CEl1rHAi1e6gW8TzPwDbAdKBcQsATuAawlxR/FYCF0k/+fHgEEP8YeA8YT4x/DUHJLa/CjSkbVKLbhapYfkGrjXQKslNicEHQUWG2gtCmksMvh+WjMs7O2wjPirbgyz/zzA8pDOckONXuLNYRqoGOplckAFqgHDFnqDIa3VFjprkM437O0jC71EHiM+wttuqbk+pLXeUutNot7qSGfpjMMqQBX7V92LIb0XLLVKxMcJn1lq3mQAmYyExV0McraG9LY60HuOqMfryDQ8k2bWBF9Vz1WBrw0Masopf5vyJVILGpQQ75k0UwCvqPT+Fkxl4boAIO5ti61gH/Ge32Rik8SekO4eR5pl4F+inldkfSGvBmxQ6e+Av03dKYqoAX8hHsPoPETIK4DHVfpkq44yKKIAIO5R5yFCXgGsVOkzLdtJpg8ZwDRYg7t1P+1R56ElzhNtT4/YiAX0I8NVPYafwk0hrFa6v9mITSmxXlt3wEHimXc5eKkozT9sxHSP2mXrLjCUVgBWZgMWKs2ZrId9bo42mM24V/fmIiCvAK6q9JLEp1rjq4x7xx3o36PSV2zEdCe4ykYs4CHgMvHqfzm4Z0t4mp3bCebVgPMq/bC5r5tMAk8Ch4Dfg+tg8NmkA33tUechwoIcsQmiM79h4HMDU5pJ4GUHOknoRZqJrIfzasBplfZ2dMWCZ1S6aiOmJ0MzyI7NrUrSZOgBW9ExJbjNVrBA3iDq9awL0V1K1KpKFUgH8WWxt10I9xPf69/oQtgxzxNfEnvQlfghJX6G/DeIT0rAT0Q9fuoywKPEl8V3uAxgyVtEvc1SwD7lxypIDdkvmG+GiO8Yf1hEoKXE5/HjuJkim1JBTpXpGWVhnkZUsDlkg9L7AYUg5vfKSx14qejA+0guBJ81oYIsfmofu30E70QOI+jg4zjej0thmHi1nwOO4vHN1I2cC9AmriEblUUckVmA9Pa1hLjfYHZGwYpukmvCHPAjslfngg5kkPNzSqyjzEPmG3Qix1LS1vhOI+Nzk3X/cvDdtNNhdaTNW1V7V4elR5B9uZ6U+/8hndZJZBR5DlkBaixX3Q3cjyxmDCG7OU+Qvgg7BbwOHHHg3Rk9yB6f3kp3eTWOyi71lCcjBhGT/+Mu443D0ms95sOaPmAn8AvmGT8LvIPDWZ3G1w8mVhD/wUSF6A8mppAfTEwgaw4ngEue/LVp0+YO5QbkJEUZhK6kegAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <h2>
        {" "}
        Упоминание положительных отзывов от клиентов или успешных кейсов может
        существенно повысить доверие к вашей компании.
      </h2>
    </>,
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_1291"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <rect width="64" height="64" fill="url(#pattern0_1_1291)" />
        </mask>
        <g mask="url(#mask0_1_1291)">
          <rect x="-1" y="-8" width="65" height="79" fill="#029491" />
        </g>
        <defs>
          <pattern
            id="pattern0_1_1291"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1291" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_1_1291"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVR4nO2b3YuUVRzHP9u4K7r2MrujkNnu0kWm67ZhXkQIlRBSFBgsSBZeZd2I0V1p9TcoCmFEYFCKNxKJSYHetBU49qKx7RquFyJI7RahOVu5s178npHn+T1vM+ec56zifOCBPfM88/19z9lzznPeBtq0adPGDwPAXJPXgC9Td/kKBDxd0LNW+CyApwp69rbhAs03gQvz5LHNHUeHpzh9wAZgHbAS6eV7gSXB/avANFL1zwGngBPARU/+CqEfeBf4lebbvr7GgF2B1m3DEPAJcB3zjOtrFvgCqUG3LD3AfqCOu4zrq44U7jJPeWqazcCfpBuvIW36PWATsAooA53BVQ4+2wS8Hzw7k6E3DYx4yVkOXcAHpBs9BbwG3GugfR+wDahm6O9DCnBe6AaOpxirAs86jLUR+CEl1rHAi1e6gW8TzPwDbAdKBcQsATuAawlxR/FYCF0k/+fHgEEP8YeA8YT4x/DUHJLa/CjSkbVKLbhapYfkGrjXQKslNicEHQUWG2gtCmksMvh+WjMs7O2wjPirbgyz/zzA8pDOckONXuLNYRqoGOplckAFqgHDFnqDIa3VFjprkM437O0jC71EHiM+wttuqbk+pLXeUutNot7qSGfpjMMqQBX7V92LIb0XLLVKxMcJn1lq3mQAmYyExV0McraG9LY60HuOqMfryDQ8k2bWBF9Vz1WBrw0Masopf5vyJVILGpQQ75k0UwCvqPT+Fkxl4boAIO5ti61gH/Ge32Rik8SekO4eR5pl4F+inldkfSGvBmxQ6e+Av03dKYqoAX8hHsPoPETIK4DHVfpkq44yKKIAIO5R5yFCXgGsVOkzLdtJpg8ZwDRYg7t1P+1R56ElzhNtT4/YiAX0I8NVPYafwk0hrFa6v9mITSmxXlt3wEHimXc5eKkozT9sxHSP2mXrLjCUVgBWZgMWKs2ZrId9bo42mM24V/fmIiCvAK6q9JLEp1rjq4x7xx3o36PSV2zEdCe4ykYs4CHgMvHqfzm4Z0t4mp3bCebVgPMq/bC5r5tMAk8Ch4Dfg+tg8NmkA33tUechwoIcsQmiM79h4HMDU5pJ4GUHOknoRZqJrIfzasBplfZ2dMWCZ1S6aiOmJ0MzyI7NrUrSZOgBW9ExJbjNVrBA3iDq9awL0V1K1KpKFUgH8WWxt10I9xPf69/oQtgxzxNfEnvQlfghJX6G/DeIT0rAT0Q9fuoywKPEl8V3uAxgyVtEvc1SwD7lxypIDdkvmG+GiO8Yf1hEoKXE5/HjuJkim1JBTpXpGWVhnkZUsDlkg9L7AYUg5vfKSx14qejA+0guBJ81oYIsfmofu30E70QOI+jg4zjej0thmHi1nwOO4vHN1I2cC9AmriEblUUckVmA9Pa1hLjfYHZGwYpukmvCHPAjslfngg5kkPNzSqyjzEPmG3Qix1LS1vhOI+Nzk3X/cvDdtNNhdaTNW1V7V4elR5B9uZ6U+/8hndZJZBR5DlkBaixX3Q3cjyxmDCG7OU+Qvgg7BbwOHHHg3Rk9yB6f3kp3eTWOyi71lCcjBhGT/+Mu443D0ms95sOaPmAn8AvmGT8LvIPDWZ3G1w8mVhD/wUSF6A8mppAfTEwgaw4ngEue/LVp0+YO5QbkJEUZhK6kegAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <h2>
        Укажите на конкретные преимущества, которые ваш продукт или услуга
        предлагает в сравнении.
      </h2>
    </>,
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_1291"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <rect width="64" height="64" fill="url(#pattern0_1_1291)" />
        </mask>
        <g mask="url(#mask0_1_1291)">
          <rect x="-1" y="-8" width="65" height="79" fill="#029491" />
        </g>
        <defs>
          <pattern
            id="pattern0_1_1291"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1291" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_1_1291"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVR4nO2b3YuUVRzHP9u4K7r2MrujkNnu0kWm67ZhXkQIlRBSFBgsSBZeZd2I0V1p9TcoCmFEYFCKNxKJSYHetBU49qKx7RquFyJI7RahOVu5s178npHn+T1vM+ec56zifOCBPfM88/19z9lzznPeBtq0adPGDwPAXJPXgC9Td/kKBDxd0LNW+CyApwp69rbhAs03gQvz5LHNHUeHpzh9wAZgHbAS6eV7gSXB/avANFL1zwGngBPARU/+CqEfeBf4lebbvr7GgF2B1m3DEPAJcB3zjOtrFvgCqUG3LD3AfqCOu4zrq44U7jJPeWqazcCfpBuvIW36PWATsAooA53BVQ4+2wS8Hzw7k6E3DYx4yVkOXcAHpBs9BbwG3GugfR+wDahm6O9DCnBe6AaOpxirAs86jLUR+CEl1rHAi1e6gW8TzPwDbAdKBcQsATuAawlxR/FYCF0k/+fHgEEP8YeA8YT4x/DUHJLa/CjSkbVKLbhapYfkGrjXQKslNicEHQUWG2gtCmksMvh+WjMs7O2wjPirbgyz/zzA8pDOckONXuLNYRqoGOplckAFqgHDFnqDIa3VFjprkM437O0jC71EHiM+wttuqbk+pLXeUutNot7qSGfpjMMqQBX7V92LIb0XLLVKxMcJn1lq3mQAmYyExV0McraG9LY60HuOqMfryDQ8k2bWBF9Vz1WBrw0Masopf5vyJVILGpQQ75k0UwCvqPT+Fkxl4boAIO5ti61gH/Ge32Rik8SekO4eR5pl4F+inldkfSGvBmxQ6e+Av03dKYqoAX8hHsPoPETIK4DHVfpkq44yKKIAIO5R5yFCXgGsVOkzLdtJpg8ZwDRYg7t1P+1R56ElzhNtT4/YiAX0I8NVPYafwk0hrFa6v9mITSmxXlt3wEHimXc5eKkozT9sxHSP2mXrLjCUVgBWZgMWKs2ZrId9bo42mM24V/fmIiCvAK6q9JLEp1rjq4x7xx3o36PSV2zEdCe4ykYs4CHgMvHqfzm4Z0t4mp3bCebVgPMq/bC5r5tMAk8Ch4Dfg+tg8NmkA33tUechwoIcsQmiM79h4HMDU5pJ4GUHOknoRZqJrIfzasBplfZ2dMWCZ1S6aiOmJ0MzyI7NrUrSZOgBW9ExJbjNVrBA3iDq9awL0V1K1KpKFUgH8WWxt10I9xPf69/oQtgxzxNfEnvQlfghJX6G/DeIT0rAT0Q9fuoywKPEl8V3uAxgyVtEvc1SwD7lxypIDdkvmG+GiO8Yf1hEoKXE5/HjuJkim1JBTpXpGWVhnkZUsDlkg9L7AYUg5vfKSx14qejA+0guBJ81oYIsfmofu30E70QOI+jg4zjej0thmHi1nwOO4vHN1I2cC9AmriEblUUckVmA9Pa1hLjfYHZGwYpukmvCHPAjslfngg5kkPNzSqyjzEPmG3Qix1LS1vhOI+Nzk3X/cvDdtNNhdaTNW1V7V4elR5B9uZ6U+/8hndZJZBR5DlkBaixX3Q3cjyxmDCG7OU+Qvgg7BbwOHHHg3Rk9yB6f3kp3eTWOyi71lCcjBhGT/+Mu443D0ms95sOaPmAn8AvmGT8LvIPDWZ3G1w8mVhD/wUSF6A8mppAfTEwgaw4ngEue/LVp0+YO5QbkJEUZhK6kegAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <h2>
        Укажите на опыт вашей команды, квалификации и достижения, которые могут
        вызвать доверие.
      </h2>
    </>,
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_1291"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <rect width="64" height="64" fill="url(#pattern0_1_1291)" />
        </mask>
        <g mask="url(#mask0_1_1291)">
          <rect x="-1" y="-8" width="65" height="79" fill="#029491" />
        </g>
        <defs>
          <pattern
            id="pattern0_1_1291"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1291" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_1_1291"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVR4nO2b3YuUVRzHP9u4K7r2MrujkNnu0kWm67ZhXkQIlRBSFBgsSBZeZd2I0V1p9TcoCmFEYFCKNxKJSYHetBU49qKx7RquFyJI7RahOVu5s178npHn+T1vM+ec56zifOCBPfM88/19z9lzznPeBtq0adPGDwPAXJPXgC9Td/kKBDxd0LNW+CyApwp69rbhAs03gQvz5LHNHUeHpzh9wAZgHbAS6eV7gSXB/avANFL1zwGngBPARU/+CqEfeBf4lebbvr7GgF2B1m3DEPAJcB3zjOtrFvgCqUG3LD3AfqCOu4zrq44U7jJPeWqazcCfpBuvIW36PWATsAooA53BVQ4+2wS8Hzw7k6E3DYx4yVkOXcAHpBs9BbwG3GugfR+wDahm6O9DCnBe6AaOpxirAs86jLUR+CEl1rHAi1e6gW8TzPwDbAdKBcQsATuAawlxR/FYCF0k/+fHgEEP8YeA8YT4x/DUHJLa/CjSkbVKLbhapYfkGrjXQKslNicEHQUWG2gtCmksMvh+WjMs7O2wjPirbgyz/zzA8pDOckONXuLNYRqoGOplckAFqgHDFnqDIa3VFjprkM437O0jC71EHiM+wttuqbk+pLXeUutNot7qSGfpjMMqQBX7V92LIb0XLLVKxMcJn1lq3mQAmYyExV0McraG9LY60HuOqMfryDQ8k2bWBF9Vz1WBrw0Masopf5vyJVILGpQQ75k0UwCvqPT+Fkxl4boAIO5ti61gH/Ge32Rik8SekO4eR5pl4F+inldkfSGvBmxQ6e+Av03dKYqoAX8hHsPoPETIK4DHVfpkq44yKKIAIO5R5yFCXgGsVOkzLdtJpg8ZwDRYg7t1P+1R56ElzhNtT4/YiAX0I8NVPYafwk0hrFa6v9mITSmxXlt3wEHimXc5eKkozT9sxHSP2mXrLjCUVgBWZgMWKs2ZrId9bo42mM24V/fmIiCvAK6q9JLEp1rjq4x7xx3o36PSV2zEdCe4ykYs4CHgMvHqfzm4Z0t4mp3bCebVgPMq/bC5r5tMAk8Ch4Dfg+tg8NmkA33tUechwoIcsQmiM79h4HMDU5pJ4GUHOknoRZqJrIfzasBplfZ2dMWCZ1S6aiOmJ0MzyI7NrUrSZOgBW9ExJbjNVrBA3iDq9awL0V1K1KpKFUgH8WWxt10I9xPf69/oQtgxzxNfEnvQlfghJX6G/DeIT0rAT0Q9fuoywKPEl8V3uAxgyVtEvc1SwD7lxypIDdkvmG+GiO8Yf1hEoKXE5/HjuJkim1JBTpXpGWVhnkZUsDlkg9L7AYUg5vfKSx14qejA+0guBJ81oYIsfmofu30E70QOI+jg4zjej0thmHi1nwOO4vHN1I2cC9AmriEblUUckVmA9Pa1hLjfYHZGwYpukmvCHPAjslfngg5kkPNzSqyjzEPmG3Qix1LS1vhOI+Nzk3X/cvDdtNNhdaTNW1V7V4elR5B9uZ6U+/8hndZJZBR5DlkBaixX3Q3cjyxmDCG7OU+Qvgg7BbwOHHHg3Rk9yB6f3kp3eTWOyi71lCcjBhGT/+Mu443D0ms95sOaPmAn8AvmGT8LvIPDWZ3G1w8mVhD/wUSF6A8mppAfTEwgaw4ngEue/LVp0+YO5QbkJEUZhK6kegAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <h2>
        Уникальное предложение: Высокая и оперативная скорость обработки заявки.
      </h2>
    </>,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 4;
  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentIndex < totalSlides - visibleSlides) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(totalSlides - visibleSlides);
    }
  };

  return (
    <div className={style.wrapper}>
      <button className={style.previousButton} onClick={prevSlide}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </button>
      <div className={style.sliderContainer}>
        <div
          className={style.sliderTrack}
          style={{
            transition: "transform 0.5s ease",
            transform: `translateX(-${(currentIndex * 100) / 8}%)`,
          }}
        >
          {slides
            .slice(currentIndex, currentIndex + visibleSlides)
            .map((slide, index) => (
              <Slide key={index}>{slide}</Slide>
            ))}
        </div>{" "}
      </div>
      <button className={style.nextButton} onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;