type IconProps = {
  isActivated?: boolean;
  width?: any;
  height?: number;
  fill?: string;
  strokeFill?: string;
  strokeWidth?: number;
  isActive?: boolean;
};

export function IconLogo(props: IconProps) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 167 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M154.189 8.54999H161.189V18.05H166.489V23.5H161.189V40H154.189V23.5H150.789V18.05H154.189V8.54999Z"
          fill={props.fill}
        />
        <path
          d="M130.626 40.6C128.593 40.6 126.743 40.2 125.076 39.4C123.443 38.5667 122.143 37.3 121.176 35.6C120.209 33.9 119.726 31.7333 119.726 29.1C119.726 26.6333 120.226 24.5 121.226 22.7C122.226 20.9 123.543 19.5167 125.176 18.55C126.81 17.55 128.543 17.05 130.376 17.05C132.543 17.05 134.176 17.4167 135.276 18.15C136.409 18.85 137.343 19.6333 138.076 20.5L137.776 21.35L138.426 18.15H144.926V40H137.926V35.25L138.476 36.75C138.409 36.75 138.21 36.95 137.876 37.35C137.543 37.7167 137.043 38.1667 136.376 38.7C135.743 39.2 134.943 39.6333 133.976 40C133.043 40.4 131.926 40.6 130.626 40.6ZM132.626 34.9C133.893 34.9 134.959 34.6333 135.826 34.1C136.693 33.5333 137.393 32.7 137.926 31.6V26.25C137.526 25.1833 136.826 24.3333 135.826 23.7C134.859 23.0667 133.71 22.75 132.376 22.75C131.376 22.75 130.443 23.0167 129.576 23.55C128.743 24.05 128.076 24.75 127.576 25.65C127.076 26.55 126.826 27.5833 126.826 28.75C126.826 29.9167 127.093 30.9667 127.626 31.9C128.16 32.8333 128.859 33.5667 129.726 34.1C130.626 34.6333 131.593 34.9 132.626 34.9Z"
          fill={props.fill}
        />
        <path
          d="M101.939 3.20001C106.506 3.20001 110.006 4.33335 112.439 6.60001C114.872 8.83335 116.089 11.8333 116.089 15.6C116.089 17.1 115.856 18.6167 115.389 20.15C114.956 21.65 114.239 23.0167 113.239 24.25C112.272 25.4833 110.956 26.4833 109.289 27.25C107.656 27.9833 105.639 28.35 103.239 28.35H98.0391V40H90.7891V3.20001H101.939ZM103.189 21.3C104.289 21.3 105.206 21.1167 105.939 20.75C106.672 20.35 107.239 19.8667 107.639 19.3C108.072 18.7 108.372 18.0833 108.539 17.45C108.739 16.8167 108.839 16.2667 108.839 15.8C108.839 15.4333 108.772 14.95 108.639 14.35C108.539 13.7167 108.306 13.0833 107.939 12.45C107.572 11.8167 107.006 11.2833 106.239 10.85C105.506 10.4167 104.506 10.2 103.239 10.2H98.0391V21.3H103.189Z"
          fill={props.fill}
        />
        <path
          d="M75.4301 18.15H82.4301V40H75.4301V18.15ZM75.2801 10.4C75.2801 9.36664 75.6801 8.51664 76.4801 7.84998C77.3134 7.18331 78.1967 6.84998 79.1301 6.84998C80.0634 6.84998 80.9134 7.18331 81.6801 7.84998C82.4801 8.51664 82.8801 9.36664 82.8801 10.4C82.8801 11.4333 82.4801 12.2833 81.6801 12.95C80.9134 13.5833 80.0634 13.9 79.1301 13.9C78.1967 13.9 77.3134 13.5833 76.4801 12.95C75.6801 12.2833 75.2801 11.4333 75.2801 10.4Z"
          fill={props.fill}
        />
        <path
          d="M61.2211 0.549988H68.2211V40H61.2211V0.549988Z"
          fill={props.fill}
        />
        <path
          d="M47.0121 18.15H54.0121V40H47.0121V18.15ZM46.8621 10.4C46.8621 9.36664 47.2621 8.51664 48.0621 7.84998C48.8954 7.18331 49.7788 6.84998 50.7121 6.84998C51.6454 6.84998 52.4954 7.18331 53.2621 7.84998C54.0621 8.51664 54.4621 9.36664 54.4621 10.4C54.4621 11.4333 54.0621 12.2833 53.2621 12.95C52.4954 13.5833 51.6454 13.9 50.7121 13.9C49.7788 13.9 48.8954 13.5833 48.0621 12.95C47.2621 12.2833 46.8621 11.4333 46.8621 10.4Z"
          fill={props.fill}
        />
        <path
          d="M0.75 40V1.70001H0.8L21.25 30.7L18.15 30L38.55 1.70001H38.65V40H31.4V18.05L31.85 21.8L19.4 39.5H19.3L6.5 21.8L7.75 18.35V40H0.75Z"
          fill={props.fill}
        />
      </svg>
    </>
  );
}

export function IconLogoSquare(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 300 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M265.265 125.583H285.033V152.411H300V167.801H285.033V214.397H265.265V167.801H255.663V152.411H265.265V125.583Z"
        fill={props.fill}
      />
      <path
        d="M198.726 216.092C192.984 216.092 187.759 214.962 183.053 212.703C178.44 210.349 174.769 206.772 172.039 201.972C169.309 197.171 167.944 191.052 167.944 183.616C167.944 176.65 169.356 170.625 172.18 165.542C175.004 160.459 178.723 156.552 183.335 153.823C187.948 150.999 192.843 149.587 198.02 149.587C204.139 149.587 208.751 150.622 211.857 152.693C215.058 154.67 217.694 156.882 219.765 159.329L218.917 161.73L220.753 152.693H239.109V214.397H219.341V200.983L220.894 205.219C220.706 205.219 220.141 205.784 219.2 206.914C218.258 207.949 216.846 209.22 214.964 210.726C213.175 212.138 210.916 213.362 208.186 214.397C205.55 215.527 202.397 216.092 198.726 216.092ZM204.374 199.995C207.951 199.995 210.963 199.242 213.411 197.736C215.858 196.135 217.835 193.782 219.341 190.676V175.567C218.211 172.555 216.235 170.155 213.411 168.366C210.681 166.578 207.433 165.683 203.668 165.683C200.844 165.683 198.208 166.436 195.761 167.942C193.407 169.354 191.525 171.331 190.113 173.873C188.701 176.414 187.995 179.333 187.995 182.627C187.995 185.922 188.748 188.887 190.254 191.523C191.76 194.159 193.737 196.229 196.184 197.736C198.726 199.242 201.456 199.995 204.374 199.995Z"
        fill={props.fill}
      />
      <path
        d="M117.712 110.474C130.608 110.474 140.492 113.674 147.364 120.075C154.236 126.382 157.672 134.854 157.672 145.491C157.672 149.727 157.013 154.01 155.695 158.34C154.471 162.576 152.447 166.436 149.623 169.919C146.893 173.402 143.175 176.226 138.468 178.391C133.856 180.462 128.161 181.497 121.383 181.497H106.699V214.397H86.2246V110.474H117.712ZM121.242 161.588C124.349 161.588 126.937 161.07 129.008 160.035C131.079 158.905 132.679 157.54 133.809 155.94C135.033 154.246 135.88 152.504 136.35 150.716C136.915 148.927 137.198 147.374 137.198 146.056C137.198 145.021 137.009 143.656 136.633 141.961C136.35 140.173 135.692 138.384 134.656 136.596C133.621 134.807 132.02 133.301 129.855 132.077C127.784 130.854 124.96 130.242 121.383 130.242H106.699V161.588H121.242Z"
        fill={props.fill}
      />
      <path
        d="M210.896 49.7023H230.664V111.406H210.896V49.7023ZM210.473 27.8163C210.473 24.8982 211.602 22.4978 213.861 20.6151C216.215 18.7325 218.709 17.7911 221.345 17.7911C223.981 17.7911 226.381 18.7325 228.546 20.6151C230.805 22.4978 231.935 24.8982 231.935 27.8163C231.935 30.7344 230.805 33.1348 228.546 35.0175C226.381 36.806 223.981 37.7003 221.345 37.7003C218.709 37.7003 216.215 36.806 213.861 35.0175C211.602 33.1348 210.473 30.7344 210.473 27.8163Z"
        fill={props.fill}
      />
      <path d="M170.77 0H190.537V111.407H170.77V0Z" fill={props.fill} />
      <path
        d="M130.644 49.7023H150.412V111.406H130.644V49.7023ZM130.221 27.8163C130.221 24.8982 131.35 22.4978 133.609 20.6151C135.963 18.7325 138.457 17.7911 141.093 17.7911C143.729 17.7911 146.129 18.7325 148.294 20.6151C150.553 22.4978 151.683 24.8982 151.683 27.8163C151.683 30.7344 150.553 33.1348 148.294 35.0175C146.129 36.806 143.729 37.7003 141.093 37.7003C138.457 37.7003 135.963 36.806 133.609 35.0175C131.35 33.1348 130.221 30.7344 130.221 27.8163Z"
        fill={props.fill}
      />
      <path
        d="M0 111.406V3.24731H0.141199L57.8918 85.1431L49.1375 83.1663L106.747 3.24731H107.029V111.406H86.5554V49.4196L87.8262 60.0096L52.6675 109.994H52.3851L16.238 60.0096L19.7679 50.2668V111.406H0Z"
        fill={props.fill}
      />
    </svg>
  );
}

export const IconSearch = (props: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={props.height}
    role="presentation"
    viewBox="0 0 24 24"
    width={props.width}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth}
    />
  </svg>
);

export const IconBookmark = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          viewBox="0 0 16 16"
          height={props.height}
          width={props.width}
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M2 15.5V2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.74.439L8 13.069l-5.26 2.87A.5.5 0 012 15.5zM8.16 4.1a.178.178 0 00-.32 0l-.634 1.285a.178.178 0 01-.134.098l-1.42.206a.178.178 0 00-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 00.258.187l1.27-.668a.178.178 0 01.165 0l1.27.668a.178.178 0 00.257-.187L9.368 7.15a.178.178 0 01.05-.158l1.028-1.001a.178.178 0 00-.098-.303l-1.42-.206a.178.178 0 01-.134-.098L8.16 4.1z"
          />
        </svg>
      ) : (
        <svg
          fill={props.fill}
          viewBox="0 0 16 16"
          height={props.height}
          width={props.width}
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M10.854 5.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 7.793l2.646-2.647a.5.5 0 01.708 0z"
          />
          <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
        </svg>
      )}
    </>
  );
};

export const IconBack = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 1024 1024"
          fill={props.fill || "#080341"}
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 1024 1024"
          fill={props.fill || "#080341"}
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      )}
    </>
  );
};

export const IconLinkedIn = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill || "#080341"}
          // stroke={props.strokeFill || "#080341"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0"
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      ) : (
        <svg
          fill={props.fill || "#080341"}
          // stroke={props.strokeFill || "#080341"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0"
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      )}
    </>
  );
};

export const IconGithub = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>github [#142]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill={props.fill || "#080341"}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>github [#142]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill={props.fill || "#080341"}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      )}
    </>
  );
};

export const IconVoice = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11L6 13"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9L9 15"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L15 15"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 11L18 13"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11L12 13"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11L6 13"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9L9 15"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L15 15"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 11L18 13"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11L12 13"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export const IconPrev = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00003 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.00003 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00003 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.00003 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export const IconNext = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
export const IconHome = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconPerson = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
        </svg>
      )}
    </>
  );
};

export const IconChat = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.457 18.185C3.358 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.261a.44.44 0 0 1-.185.062.342.342 0 0 1-.34-.338c0-.093.03-.154.062-.247.03-.03.308-1.046.463-1.661 0-.062.03-.154.03-.216 0-.246-.092-.43-.277-.553zm3.21-7.674c.717 0 1.285-.568 1.285-1.285 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285zm6.666 0c.718 0 1.285-.568 1.285-1.285 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.457 18.185C3.358 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.261a.44.44 0 0 1-.185.062.342.342 0 0 1-.34-.338c0-.093.03-.154.062-.247.03-.03.308-1.046.463-1.661 0-.062.03-.154.03-.216 0-.246-.092-.43-.277-.553zm3.21-7.674c.717 0 1.285-.568 1.285-1.285 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285zm6.666 0c.718 0 1.285-.568 1.285-1.285 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconBook = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z" />
          </g>
        </svg>
      )}
    </>
  );
};
export const IconProfile = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
          </g>
        </svg>
      )}
    </>
  );
};
export const IconBadge = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 73.701 73.701"
        enable-background="new 0 0 73.701 73.701"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="   M23.997,23.997L12.101,12.103c6.335-6.334,15.086-10.252,24.75-10.252v16.822C31.831,18.673,27.286,20.708,23.997,23.997z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M36.851,18.673V1.851c9.665,0,18.415,3.918,24.748,10.252L49.704,23.997C46.415,20.708,41.871,18.673,36.851,18.673z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M55.028,36.851c0-5.02-2.035-9.564-5.324-12.854l11.895-11.895c6.334,6.334,10.252,15.084,10.252,24.748l0,0H55.028L55.028,36.851z   "
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M18.673,36.851L18.673,36.851H1.851c0-9.664,3.918-18.414,10.25-24.748l11.896,11.895C20.708,27.286,18.673,31.831,18.673,36.851z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M36.851,55.028v16.822c-9.664,0-18.415-3.918-24.75-10.251l11.896-11.896C27.286,52.994,31.831,55.028,36.851,55.028z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M55.028,36.851h16.822c0,9.666-3.918,18.415-10.252,24.749L49.704,49.704C52.993,46.415,55.028,41.87,55.028,36.851z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M1.851,36.851h16.822c0,5.02,2.035,9.564,5.324,12.854L12.101,61.6C5.769,55.266,1.851,46.517,1.851,36.851L1.851,36.851z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M49.704,49.704L61.599,61.6c-6.333,6.333-15.083,10.251-24.748,10.251V55.028C41.871,55.028,46.415,52.994,49.704,49.704z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />

          <path
            d="   M23.997,23.997c3.289-3.289,7.834-5.324,12.854-5.324c5.02,0,9.564,2.035,12.854,5.324s5.324,7.834,5.324,12.854l0,0   c0,5.02-2.035,9.564-5.324,12.854c-3.289,3.29-7.833,5.324-12.854,5.324c-5.02,0-9.564-2.034-12.854-5.324   c-3.289-3.289-5.324-7.834-5.324-12.854S20.708,27.286,23.997,23.997z"
            fill="none"
            stroke={props.strokeFill}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="3"
          />
        </g>
      </svg>
    </>
  );
};
export const IconChart = (props: IconProps) => {
  return (
    <>
      <svg
        fill={props.fill}
        height={props.height}
        width={props.width}
        viewBox="-0.5 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path d="M30.000,32.000 L23.000,32.000 C22.447,32.000 22.000,31.552 22.000,31.000 L22.000,1.000 C22.000,0.448 22.447,-0.000 23.000,-0.000 L30.000,-0.000 C30.553,-0.000 31.000,0.448 31.000,1.000 L31.000,31.000 C31.000,31.552 30.553,32.000 30.000,32.000 ZM29.000,2.000 L24.000,2.000 L24.000,30.000 L29.000,30.000 L29.000,2.000 ZM19.000,32.000 L12.000,32.000 C11.448,32.000 11.000,31.552 11.000,31.000 L11.000,17.000 C11.000,16.448 11.448,16.000 12.000,16.000 L19.000,16.000 C19.553,16.000 20.000,16.448 20.000,17.000 L20.000,31.000 C20.000,31.552 19.553,32.000 19.000,32.000 ZM18.000,18.000 L13.000,18.000 L13.000,30.000 L18.000,30.000 L18.000,18.000 ZM8.000,32.000 L1.000,32.000 C0.448,32.000 0.000,31.552 0.000,31.000 L0.000,11.000 C0.000,10.448 0.448,10.000 1.000,10.000 L8.000,10.000 C8.552,10.000 9.000,10.448 9.000,11.000 L9.000,31.000 C9.000,31.552 8.552,32.000 8.000,32.000 ZM7.000,12.000 L2.000,12.000 L2.000,30.000 L7.000,30.000 L7.000,12.000 Z" />
      </svg>
    </>
  );
};
export const IconLock = (props: IconProps) => {
  return (
    <>
      <svg
        fill={props.fill}
        height={props.height}
        width={props.width}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 12h-1v-3.816c0-4.589-3.32-8.184-8.037-8.184-4.736 0-7.963 3.671-7.963 8.184v3.816h-1c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM10 8.184c0-3.409 2.33-6.184 5.963-6.184 3.596 0 6.037 2.716 6.037 6.184v3.816h-12v-3.816zM27 28c0 1.102-0.898 2-2 2h-18c-1.103 0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18c-1.104 0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0.895-2-2-2z"></path>
      </svg>
    </>
  );
};
export const IconLike = (props: IconProps) => {
  return (
    <>
      <svg
        fill={props.fill}
        height={props.height}
        width={props.width}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.017 31.992c-9.088 0-9.158-0.377-10.284-1.224-0.597-0.449-1.723-0.76-5.838-1.028-0.298-0.020-0.583-0.134-0.773-0.365-0.087-0.107-2.143-3.105-2.143-7.907 0-4.732 1.472-6.89 1.534-6.99 0.182-0.293 0.503-0.47 0.847-0.47 3.378 0 8.062-4.313 11.21-11.841 0.544-1.302 0.657-2.159 2.657-2.159 1.137 0 2.413 0.815 3.042 1.86 1.291 2.135 0.636 6.721 0.029 9.171 2.063-0.017 5.796-0.045 7.572-0.045 2.471 0 4.107 1.473 4.156 3.627 0.017 0.711-0.077 1.619-0.282 2.089 0.544 0.543 1.245 1.36 1.276 2.414 0.038 1.36-0.852 2.395-1.421 2.989 0.131 0.395 0.391 0.92 0.366 1.547-0.063 1.542-1.253 2.535-1.994 3.054 0.061 0.422 0.11 1.218-0.026 1.834-0.535 2.457-4.137 3.443-9.928 3.443zM3.426 27.712c3.584 0.297 5.5 0.698 6.51 1.459 0.782 0.589 0.662 0.822 9.081 0.822 2.568 0 7.59-0.107 7.976-1.87 0.153-0.705-0.59-1.398-0.593-1.403-0.203-0.501 0.023-1.089 0.518-1.305 0.008-0.004 2.005-0.719 2.050-1.835 0.030-0.713-0.46-1.142-0.471-1.16-0.291-0.452-0.185-1.072 0.257-1.38 0.005-0.004 1.299-0.788 1.267-1.857-0.024-0.849-1.143-1.447-1.177-1.466-0.25-0.143-0.432-0.39-0.489-0.674-0.056-0.282 0.007-0.579 0.183-0.808 0 0 0.509-0.808 0.49-1.566-0.037-1.623-1.782-1.674-2.156-1.674-2.523 0-9.001 0.025-9.001 0.025-0.349 0.002-0.652-0.164-0.84-0.443s-0.201-0.627-0.092-0.944c0.977-2.813 1.523-7.228 0.616-8.736-0.267-0.445-0.328-0.889-1.328-0.889-0.139 0-0.468 0.11-0.812 0.929-3.341 7.995-8.332 12.62-12.421 13.037-0.353 0.804-1.016 2.47-1.016 5.493 0 3.085 0.977 5.473 1.447 6.245z"></path>
      </svg>
    </>
  );
};
