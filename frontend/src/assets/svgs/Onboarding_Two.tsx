import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={309}
    height={379}
    viewBox="0 0 309 379"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={154.5} cy={154.5} r={154.5} fill="#F95A2C" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M102.682 186.767C100.727 187.86 99.1053 188.608 97.5768 189.118L95.329 189.868L97.443 190.938C98.8789 191.664 100.244 192.591 101.617 193.771L102.677 194.682L103.188 193.383C103.86 191.678 104.187 189.737 104.16 187.617L104.138 185.952L102.682 186.767ZM196.572 192.275C194.743 195.57 192.535 198.814 190.399 201.951C185.686 208.875 180.812 216.035 179.311 224.597C179.136 225.661 179.061 229.409 179.061 229.409L180.458 228.841C185.123 226.945 190.073 225.534 194.86 224.169C196.71 223.642 198.623 223.097 200.498 222.53C201.261 222.326 202.021 222.087 202.755 221.857C204.538 221.297 206.222 220.769 207.992 220.679L208.531 220.651L208.801 220.185C211.24 215.968 209.411 211.949 207.316 208.193C206.058 205.455 204.44 202.882 202.874 200.394C201.252 197.815 199.574 195.148 198.349 192.358L197.544 190.525L196.572 192.275ZM106.549 227.207C109.322 230.107 111.898 233.055 114.205 235.967L115.956 235.163C115.11 230.862 112.48 227.832 107.682 225.626L106.549 227.207ZM199.313 292.009C199.035 292.009 198.775 292.116 198.58 292.311C198.382 292.509 198.273 292.776 198.274 293.062L199.313 293.059V292.009ZM83.9261 363.728C82.2969 360.936 82.0575 356.554 84.4991 354.178C83.6779 349.047 85.2912 343.313 88.8642 339.227L88.8724 339.24C94.1773 331.305 94.5672 328.478 90.6912 319.609C83.7642 319.344 76.6291 319.265 69.8657 317.649L70.1186 316.139C69.8683 316.073 68.5895 315.737 68.3149 315.667C68.3516 315.948 68.5422 317.23 68.5376 317.486C68.2216 317.831 67.458 318.152 67.316 317.473C63.0612 299.309 59.2534 281.506 55.1158 263.37C50.7855 245.065 42.077 215.788 63.3939 205.7L62.9538 203.824C61.7766 203.825 61.3036 202.543 60.764 200.733C58.3588 194.258 63.0356 187.909 67.409 183.904C73.387 177.927 78.9019 171.29 84.2369 164.875C99.4551 146.396 120.162 121.736 146.631 125.926L146.541 127.014C150.682 127.534 155.005 128.628 159.198 127.866C173.511 125.389 189.084 130.992 197.887 142.496L198.21 140.352C198.241 140.149 198.313 139.962 198.634 139.962C199.053 139.947 199.275 140.29 199.43 140.606C214.624 146.605 220.919 166.13 225.774 179.513C226.394 181.775 226.219 182.444 226.165 182.577L225.283 183.102C234.441 195.271 239.473 209.907 243.79 223.785C245.216 227.484 245.365 230.048 242.982 232.286C258.695 241.716 271.024 256.413 264.053 273.169C254.955 289.472 230.864 299.817 212.769 309.181C205.584 313.07 195.133 315.14 188.521 321.508C188.079 322.16 187.445 322.795 187.061 322.743C183.992 323.197 179.425 304.05 180.119 302.517C176.88 303.674 173.276 303.613 169.888 304.216C170.191 304.883 171.185 305.785 170.442 306.526C170.492 308.775 170.146 311.205 169.65 313.497C173.717 312.846 173.624 314.977 169.712 313.849C169.606 314.842 169.335 317.374 169.231 318.334C170.398 317.821 172.723 317.461 173.537 318.263C173.204 319.332 170.324 318.326 169.215 318.642C168.566 323.449 168.354 328.175 167.899 332.969C171.361 336.263 176.768 337.041 179.858 340.604C182.476 343.316 182.098 347.866 179.027 350.048C180.908 352.251 179.403 355.909 176.656 356.507C172.915 357.379 169.004 356.173 165.315 355.159C159.182 353.142 152.76 349.997 145.682 345.546C142.881 343.804 140.796 341.067 139.805 337.836C132.624 315.729 130.705 300.707 134.094 293.167C136.029 291.708 138.185 292.609 139.971 291.811C140.822 291.431 141.589 290.921 142.208 289.109C132.891 288.195 119.31 289.893 111.842 285.434L112.105 284.875C111.415 284.436 109.9 282.596 109.323 282.005C110.363 294.49 111.198 307.298 111.611 319.738C112.981 322.04 114.144 324.422 115.421 327.08C116.309 327.951 117.863 329.444 116.952 330.432C116.951 330.432 124.62 348.368 126.963 357.434C129.194 357.528 130.099 361.303 130.014 363.81C129.674 368.373 123.812 368.857 118.672 369.305C115.155 369.673 111.539 369.864 107.977 369.864C101.541 369.869 85.4486 369.426 83.9261 363.728Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M175.161 301.626C172.63 302.221 170.078 302.714 167.531 303.245C166.878 303.531 163.593 303.578 164.192 304.648C164.189 304.651 164.187 304.654 164.184 304.656C164.852 305.17 165.758 304.879 166.564 304.946C160.302 307.505 156.008 302.232 157.16 296.212C157.324 295.138 157.536 293.914 158 292.932C158.246 292.492 160.012 289.098 160.323 290.256C160.079 290.402 160.77 290.463 160.674 289.938C182.176 289.7 176.882 279.833 178.923 300.785C177.658 300.881 176.395 301.336 175.161 301.626ZM169.935 310.774C169.817 311.298 169.687 311.834 169.534 312.353C165.327 313.082 162.233 315.212 168.894 314.811C168.702 315.596 168.522 316.384 168.352 317.175C167.527 317.491 164.533 318.493 164.686 319.45C165.724 319.682 166.857 319.253 167.923 319.298C167.231 323.878 166.219 328.564 166.311 333.207C166.299 334.735 168.638 335.024 168.938 333.508C171.771 337.66 180.316 339.282 179.505 345.349C179.053 346.589 178.461 347.434 177.19 347.479C176.288 347.712 175.28 348.775 175.799 349.725L175.776 349.733C175.874 350.592 176.858 350.902 177.502 351.149C178.144 351.647 178.167 352.45 177.658 353.2C175.167 355.819 168.065 353.209 164.977 352.348C158.711 350.176 152.788 347.032 147.138 343.591C144.489 342.069 142.669 339.518 141.806 336.619C137.922 322.82 132.883 308.177 135.168 293.743C136.157 292.337 138.301 292.593 139.696 291.849C137.389 300.344 141.213 309.167 142.769 317.544C145.981 332.627 148.512 344.657 165.163 349.69C167.41 350.16 172.253 351.859 173.92 349.976C174.451 349.469 174.398 348.622 173.92 348.106C173.077 346.981 171.683 347.116 170.425 346.988C167.166 346.582 163.977 345.594 161.07 344.067C154.608 340.882 150.117 334.738 148.975 327.656C147.036 319.682 145.295 311.643 143.03 303.752C141.48 298.385 138.948 293.713 144.554 289.76C148.348 289.872 152.146 289.976 155.942 289.989C155.007 291.556 153.973 293.532 154.5 295.39C152.185 300.627 155.174 307.606 160.94 308.942C164.131 309.627 167.444 308.811 170.388 307.465C170.342 308.571 170.201 309.641 169.935 310.774ZM110.805 285.123C110.789 284.909 110.772 284.693 110.756 284.477C111.049 284.798 111.384 285.087 111.744 285.347C111.434 285.268 111.123 285.187 110.805 285.123ZM111.363 320.488C111.667 321.581 112.006 322.664 112.375 323.738C106.899 322.159 99.598 320.848 95.0466 325.134C94.3969 323.386 93.6218 321.729 92.5353 320.233C98.0765 319.605 103.659 319.951 109.199 319.389C109.608 320.161 110.544 320.62 111.363 320.488ZM94.4242 333.098C94.4441 333.042 94.4656 332.986 94.4854 332.931C94.7975 332.892 95.1075 332.855 95.4179 332.814C95.0855 332.905 94.7549 332.999 94.4242 333.098ZM113.717 327.546C113.923 328.251 114.47 328.686 115.021 328.733C115.566 329.327 115.782 330.225 116.511 330.632C119.27 339.737 122.98 348.583 124.85 357.948C112.063 362.078 100.077 362.314 87.2094 358.15C87.5185 357.847 87.664 357.44 87.6706 356.988C87.6787 356.996 87.6887 357.003 87.6986 357.011C85.9583 348.487 86.9399 345.804 91.3839 338.517C97.355 338.26 103.344 338.039 109.321 338.218C110.724 338.382 113.448 337.231 112.22 335.557C110.78 333.982 108.517 334.408 106.583 334.511C102.069 334.737 97.5661 335.4 93.2652 336.815C93.7172 335.857 93.8576 334.717 94.221 333.701C98.3903 333.229 102.601 333.119 106.783 333.466C108.342 333.612 110.179 334.359 111.527 333.274C113.937 329.093 96.8767 331.385 94.9154 331.852C95.5611 330.339 96.2499 328.769 95.9551 327.072C100.254 323.695 109.267 324.862 113.717 327.546ZM126.366 360.912C126.71 361.152 127.15 361.141 127.522 360.976C128.383 363.054 127.785 365.179 125.402 365.667C121.059 366.683 116.533 366.873 112.092 367.133C107.365 367.318 102.621 367.181 97.9131 366.734C90.3572 366.508 83.644 364.387 83.9525 355.542C84.2549 356.723 84.4523 358.534 85.9728 358.609C97.839 364.86 113.246 365.454 125.49 360.021C125.702 360.358 125.981 360.643 126.366 360.912ZM69.7258 316.74C69.7242 316.715 69.7242 316.693 69.7207 316.669C69.8483 316.702 69.9763 316.74 70.1059 316.771C69.9788 316.759 69.8531 316.748 69.7258 316.74ZM103.389 187.3C103.412 189.128 103.16 190.981 102.486 192.692C101.145 191.54 99.697 190.528 98.1131 189.727C99.9529 189.112 101.697 188.246 103.389 187.3ZM65.2023 203.986C65.4502 203.55 64.3472 204.083 64.1756 204.105C64.8943 203.529 64.7478 202.305 63.9146 201.977C59.9627 195.104 64.7566 188.863 69.8236 184.296C78.4712 175.765 85.5097 165.828 93.5498 156.75C103.693 158.437 113.49 162.771 121.057 169.751C113.308 176.883 105.224 184.378 95.4711 188.641C94.5645 188.202 93.3587 188.322 93.0572 189.303C91.938 189.506 90.8222 189.79 89.7059 189.972C89.6496 189.98 89.6578 190.063 89.7059 190.076C90.8032 190.453 91.9341 190.704 93.1066 190.63C104.386 194.549 108.605 206.657 116.629 214.565C123.181 220.284 132.579 224.504 133.524 234.233C135.102 237.379 136.241 240.661 135.823 244.184C135.933 246.935 134.97 249.664 135.757 252.332C134.102 258.642 132.206 265.207 127.467 269.965C127.333 269.932 127.194 269.94 127.065 270.003C127.406 267.894 127.771 265.789 128.132 263.684C129.497 260.9 130.37 257.904 130.942 254.864C131.175 253.333 128.919 253.026 128.824 254.586C127.286 260.054 125.422 266.535 120.074 269.716C121.047 266.041 122.221 262.409 123.841 258.966C124.461 257.82 125.047 256.655 125.62 255.486C126.239 254.22 124.392 253.107 123.706 254.37C121.208 259.119 118.852 264.498 114.094 267.34C115.596 262.386 117.574 257.533 119.45 252.701C119.659 252.205 119.225 251.618 118.758 251.485C118.187 251.322 117.744 251.686 117.537 252.176C116.785 253.917 116.213 255.933 114.998 257.441C114.509 259.113 111.099 261.696 112.832 257.863C114.518 252.933 115.662 247.674 118.081 243.076C118.747 234.735 117.483 229.517 109.423 225.656C108.254 225.072 106.804 224.326 105.402 224.075C101.484 220.186 97.2995 216.573 92.7991 213.294C83.6802 206.42 69.8167 200.279 59.3612 207.949C61.0393 206.296 62.9871 204.929 65.2023 203.986ZM104.971 144.616C115.804 134.074 129.916 125.67 145.463 125.667C145.324 125.713 145.3 125.881 145.382 125.99C133.587 175.514 190.22 194.766 200.509 140.428C211.312 147.456 219.503 165.752 223.241 177.842C213.557 178.591 204.843 184.691 199.2 192.323C198.714 191.498 198.608 190.518 199.921 190.758C200.221 190.472 198.849 190.635 198.734 190.869C201.345 185.31 204.031 179.555 205.555 173.488C205.6 173.335 205.384 173.25 205.301 173.381C203.011 177.02 200.604 180.579 198.37 184.252C190.813 199.005 175.729 211.967 176.37 229.586C176.367 229.588 176.365 229.589 176.363 229.591C176.656 230.101 176.539 230.81 176.985 231.256C174.661 241.516 168.867 252 159.457 257.283C152.348 260.55 144.611 256.764 138.475 253.061C138.248 250.894 138.02 248.729 137.792 246.564C138.909 246.284 138.767 244.245 138.8 243.349C139.035 239.574 138.056 235.87 136.044 232.636C135.116 227.834 132.513 223.567 128.75 220.45C126.237 218.308 123.445 216.53 120.885 214.449C114.091 208.945 110.45 200.766 104.443 194.54C105.167 191.928 105.32 189.313 104.546 186.627C108.839 183.864 132.235 168.641 127.892 163.314C127.264 162.382 125.9 162.547 125.541 163.621C125.088 165.079 124.416 166.426 123.304 167.496C115.438 160.381 104.972 155.66 94.2325 155.968C97.6715 152.048 101.224 148.222 104.971 144.616ZM146.396 126.555C153.107 129.882 161.2 127.581 168.358 127.873C179.368 128.307 190.05 133.708 196.874 142.341C194.203 154.109 187.834 167.491 174.876 170.192C162.033 172.494 150.682 161.517 147.616 149.775C145.561 142.241 145.518 134.275 146.396 126.555ZM238.813 210.618C239.799 213.272 240.731 215.945 241.637 218.627C242.549 221.359 243.623 224.071 244.37 226.854C244.06 228.186 243.318 229.249 242.576 230.367C237.033 238.684 225.759 237.907 217.564 241.945C216.274 242.555 214.715 243.315 213.586 244.386C212.066 244.951 211.634 246.753 211.875 248.218C213.208 255.628 214.295 262.961 214.617 270.476C214.721 272.55 214.788 274.716 214.138 276.696C211.772 274.797 210.401 263.851 210.337 260.618C210.307 259.805 209.282 259.752 208.998 260.436C205.517 269.936 207.328 280.373 206.897 290.281C201.967 283.128 201.953 274.106 201.686 265.751C201.627 264.414 199.577 264.399 199.589 265.751C199.293 274.544 200.567 284.106 199.606 292.666C195.93 283.637 194.899 273.501 195.851 263.829C194.096 268.931 194.158 275.927 194.742 281.654C193.018 281.845 194.17 286.751 193.649 288.156C183.93 265.888 193.963 252.835 204.645 234.034C206.878 228.584 213.02 218.813 211.262 213.262C210.635 211.311 209.52 209.561 208.474 207.816C205.5 202.894 202.423 198.036 199.569 193.045C200.075 192.646 200.569 192.234 201.057 191.814C207.588 186 213.547 181.466 222.75 180.811C229.906 189.71 234.895 199.95 238.813 210.618ZM199.568 292.755C199.506 292.934 199.412 292.582 199.596 292.69C199.587 292.711 199.576 292.732 199.568 292.755ZM208.136 278.143C208.179 274.496 208.134 270.812 208.635 267.2C208.439 270.847 208.301 274.496 208.136 278.143ZM204.661 220.02C196.531 222.492 188.215 224.46 180.305 227.596C180.718 213.971 191.464 203.798 197.661 192.425C200.105 197.988 204.116 202.775 206.652 208.31C208.598 211.797 210.374 215.539 208.163 219.362C207.006 219.32 205.716 219.751 204.661 220.02ZM115.114 234.899C112.691 231.881 110.155 228.973 107.489 226.195C111.472 228.026 114.332 230.589 115.205 235.025C115.177 234.983 115.147 234.942 115.114 234.899ZM159.292 289.973C158.995 290.193 158.876 290.302 158.66 290.469C158.869 290.313 159.052 290.05 159.292 289.973ZM265.238 253.799C261.44 244.146 253.405 237.023 244.716 231.719C246.897 229.183 245.988 225.929 244.942 223.112C240.585 209.133 235.674 195.001 226.948 183.067C228.781 181.975 224.963 173.569 224.413 171.545C219.734 160.188 212.718 143.823 200.33 139.467C199.681 138.337 197.692 138.277 197.451 139.875C188.136 128.999 173.269 124.251 159.249 126.562C155.051 127.294 151.029 126.209 146.884 125.703C148.929 125.787 150.962 126.033 152.964 126.471C153.121 126.506 153.181 126.287 153.031 126.234C140.361 121.489 126.179 125.305 115.254 132.551C95.7181 145.721 83.369 166.421 66.9553 182.851C62.2796 187.188 57.8093 193.361 59.8381 200.041C60.3914 201.76 60.8988 204.484 63.1757 204.484C40.8834 215.485 50.0952 244.287 54.3706 263.26C58.4837 281.288 62.3547 299.373 66.5732 317.374C66.8956 318.713 68.3408 318.792 69.1623 318.11C76.0073 319.863 83.2092 319.986 90.2436 320.244C93.8382 328.786 93.1921 330.773 88.2613 338.373C88.3373 338.36 88.4266 338.35 88.5357 338.347C88.4198 338.354 88.2896 338.39 88.1935 338.467C88.2138 338.439 88.2302 338.423 88.2613 338.373C87.9108 338.434 87.9124 338.573 87.9984 338.601C88.0578 338.55 88.1191 338.503 88.1851 338.464C88.1818 338.474 88.1818 338.479 88.1919 338.469C88.1404 338.592 88.053 338.619 87.9984 338.601C84.6685 342.739 82.9567 348.248 83.6766 353.531C81.2386 356.262 81.5137 360.829 83.2763 363.872C85.4624 368.112 90.3148 369.257 94.7043 369.64C100.092 370.346 105.532 370.633 110.964 370.486C113.649 370.414 116.329 370.239 119.001 369.959C123.574 369.464 130.535 369.427 131.224 363.572C131.376 361.394 130.448 356.836 127.993 356.274C125.685 347.443 122.86 338.463 117.653 330.854C119.215 329.52 117.626 327.225 116.455 326.151C115.335 323.823 114.206 321.498 112.898 319.267C113.26 317.924 112.36 317.092 112.538 315.762C112.58 305.647 111.537 295.569 110.834 285.484C117.996 290.497 132.161 288.97 140.952 289.656C139.589 292.703 135.82 289.692 133.482 292.278C128.418 303.178 135.41 326.502 139.078 337.796C140.126 341.21 142.329 344.159 145.374 346.053C151.606 349.972 158.236 353.473 165.248 355.777C169.049 356.828 173.174 358.072 177.113 357.138C180.168 356.399 182.166 352.73 180.513 349.914C183.589 347.154 183.522 342.566 180.835 339.634C177.761 336.027 172.619 335.231 169.155 332.226C169.557 327.892 169.766 323.575 170.316 319.26C171.591 319.198 172.865 319.741 174.061 319.152C176.344 316.955 172.446 316.044 170.6 316.614C170.668 315.985 170.734 315.357 170.802 314.727C174.845 315.627 174.979 311.723 171.101 312.066C171.465 310.225 171.662 308.353 171.656 306.494C172.047 305.909 172.022 305.195 171.701 304.646C174.228 304.263 176.923 304.246 179.371 303.512C179.424 306.686 184.245 329.462 189.464 321.858C192.262 318.905 196.077 317.149 199.812 315.635C204.38 313.756 208.922 311.816 213.407 309.748C226.746 303.593 239.649 296.426 251.56 287.816C263.579 280.102 271.287 268.038 265.238 253.799Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M202.88 105.339C201.77 91.8502 198.392 79.9034 182.518 79.394C175.354 79.4578 168.042 80.9755 161.454 83.7837C145.443 91.79 140.362 121.045 154.469 132.822C154.385 132.87 154.365 133.007 154.464 133.074C157.378 135.029 160.618 136.638 163.862 137.99C172.505 141.633 182.679 143.216 191.492 139.264C204.943 133.556 205.145 117.673 202.88 105.339Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M229.355 99.0518C229.908 98.5553 230.32 97.904 230.529 97.1738C230.719 96.508 230.732 95.781 230.53 95.1168C230.314 94.4043 229.847 93.8369 229.952 93.0953C229.963 93.0228 229.978 92.947 230 92.8713C230.404 91.4752 231.398 90.4677 231.043 88.9202C230.943 88.4833 230.753 88.09 230.49 87.7804C230.519 87.4451 230.545 87.1066 230.566 86.7681C231.149 85.4059 231.128 83.7874 230.506 82.4462C230.43 81.7595 230.315 81.0792 230.154 80.4102C230.228 79.8186 230.125 79.1673 229.934 78.6499C229.599 77.7394 229.185 76.8421 228.735 75.9597C228.788 75.7184 228.764 75.4633 228.631 75.2365C228.388 74.8243 228.067 74.462 227.739 74.1078C227.507 73.6946 227.274 73.2848 227.042 72.8804C226.935 72.6945 226.816 72.4883 226.686 72.2699C227.042 71.6112 227.232 70.9693 226.855 70.1947C226.714 69.9038 226.325 69.6892 226.005 69.7082C225.655 69.729 225.302 69.7446 224.946 69.758C224.283 68.9588 223.531 68.2413 222.725 67.8283C221.908 67.1383 221.081 66.4613 220.276 65.7697C220.048 65.573 219.818 65.3764 219.59 65.1797C219.589 65.1748 219.587 65.1684 219.586 65.1636C219.418 64.5526 219.228 63.9497 219.039 63.3436C218.921 62.968 218.886 62.5746 218.519 62.3699C217.753 61.9427 216.574 61.875 215.695 61.8025C215.608 61.7251 215.52 61.6493 215.433 61.5719C215.832 60.5112 215.761 59.3844 215.258 58.3221C215.087 57.961 214.492 57.7982 214.166 58.0367C213.413 58.5881 212.519 58.7831 211.634 58.7025C210.335 57.7063 205.093 53.2013 204.283 52.7257C204.273 52.7086 204.265 52.6916 204.254 52.6746C203.799 51.9495 203.246 51.3673 202.624 50.9004C202.535 50.8081 202.447 50.7155 202.358 50.623C202.436 50.0702 202.641 49.5365 202.972 49.0899C203.008 49.0384 203.048 48.9884 203.089 48.94C203.667 48.2533 202.961 47.3699 202.153 47.7294C202.094 47.7552 202.036 47.781 201.978 47.8084C201.357 48.0847 200.669 48.385 199.953 48.6384C199.691 48.5406 199.424 48.4519 199.181 48.3542L196.572 47.3085C196.143 47.1363 195.689 46.9904 195.274 46.7881C195.129 45.8275 194.164 45.1975 193.161 45.2304C193.219 45.046 193.306 44.8669 193.427 44.6971C193.463 44.6472 193.502 44.5988 193.542 44.5521C194.058 43.954 193.369 42.8449 192.632 43.3769C192.58 43.414 192.527 43.451 192.475 43.4881C192.27 43.6314 192.061 43.7659 191.849 43.8961C191.51 43.7485 191.127 43.7148 190.728 43.871C189.842 44.2168 189.026 44.5683 188.246 45.1103C188.214 45.1324 188.182 45.1509 188.15 45.1717C187.763 44.7055 187.148 44.3938 186.595 44.3971C186.584 44.3971 186.575 44.397 186.565 44.3968C186.151 43.7683 185.393 43.403 184.661 43.4918C184.71 42.5899 183.805 41.785 182.981 41.6871C182.018 41.573 181.15 42.1306 180.861 43.0675C180.78 43.3284 180.7 43.5893 180.619 43.8503C179.872 43.4739 179.082 43.1855 178.258 43.0416C176.381 42.7137 174.545 43.0629 172.737 43.5826C172.556 43.6345 172.375 43.6878 172.195 43.741C171.937 43.443 171.695 43.1378 171.463 42.853C171.064 42.3613 170.106 42.7546 170.17 43.3866C170.215 43.8226 170.038 44.1363 169.752 44.3593C169.438 44.405 169.134 44.4189 168.676 44.4097C168.071 44.3975 167.796 44.3786 167.163 44.1326C166.868 44.0182 166.501 43.7172 166.33 43.447C165.671 42.4109 163.998 42.1319 163.201 43.1198C162.362 42.7537 161.303 43.2586 160.838 43.9704C160.594 44.3427 160.086 44.5508 159.446 44.7297C158.966 44.8638 158.475 44.9654 157.982 45.0542C157.762 44.7568 157.299 44.5574 156.959 44.8068C156.729 44.9762 156.506 45.1501 156.286 45.3284C154.587 45.5618 152.897 45.5702 151.277 44.9096C149.906 44.3502 148.646 45.878 148.873 47.1605C148.476 47.3667 148.045 47.5039 147.652 47.7199C146.796 48.1916 146.094 48.9371 145.665 49.8131C145.589 49.97 145.519 50.1292 145.453 50.2893C145.133 50.549 144.817 50.8156 144.508 51.0969C143.994 50.8342 143.482 50.5714 142.968 50.3086C142.583 50.112 141.935 50.249 141.859 50.7584C141.734 51.5967 141.432 52.2914 141.001 52.8734C139.597 53.6085 138.248 54.4338 136.956 55.3511C135.471 55.8154 133.892 56.0862 132.594 56.3909C132.149 56.4956 131.907 57.0744 132.157 57.4596C132.422 57.8675 132.687 58.2753 132.951 58.6832C132.212 59.4021 131.519 60.1534 130.864 60.9304C129.042 63.0905 127.518 65.4586 126.154 67.9669C125.614 68.1845 125.074 68.4005 124.534 68.6182C124.014 68.8277 123.779 69.4306 124.201 69.8739C124.402 70.0851 124.581 70.3076 124.735 70.5413C123.97 71.8035 123.07 72.9545 121.81 73.709C121.427 73.9379 121.14 74.2974 120.986 74.7052C120.855 74.7923 120.726 74.8858 120.598 74.9809C120.243 75.2485 120.028 75.832 120.445 76.1786C120.737 76.4236 121.012 76.7138 121.245 77.0346C121.295 77.2168 121.347 77.4005 121.398 77.5827C120.228 78.6563 119.255 79.904 118.524 81.3033C118.351 81.2759 118.174 81.2936 118.03 81.4C116.724 82.3624 116.685 83.8954 117.21 85.2657C116.893 87.3307 117.097 89.4473 117.708 91.4478C116.905 92.2474 116.421 93.4016 116.224 94.5139C115.877 96.4677 115.852 99.4725 115.762 101.467C114.886 102.31 114.262 103.401 113.914 104.575C113.622 104.72 113.329 104.865 113.037 105.01C112.776 105.139 112.586 105.479 112.602 105.766C112.676 107.154 113.25 108.25 114.011 109.243C114.281 110.009 114.68 110.715 115.204 111.392C115.566 111.856 115.92 112.301 116.232 112.802C116.265 112.852 116.284 112.899 116.299 112.931C116.176 113.064 116.074 113.283 115.985 113.439C115.238 114.751 115.227 116.289 116.287 117.432C115.888 117.758 115.875 118.416 116.227 118.819C118.521 121.432 120.433 124.609 123.616 125.997C123.631 126.021 123.643 126.045 123.655 126.07C123.01 127.617 122.923 128.422 123.45 130.021C123.453 130.035 123.458 130.048 123.462 130.063C123.744 130.901 124.261 132.244 125.194 132.505C125.488 132.587 125.777 132.624 126.063 132.622C126.804 133.333 127.542 134.046 128.281 134.758C128.346 135.111 128.386 135.468 128.399 135.827C128.42 136.428 128.987 136.915 129.598 136.738C129.813 136.675 131.003 135.523 131.221 135.529C131.331 135.639 131.438 135.748 131.545 135.859C131.937 136.271 132.482 136.919 132.527 137.349C132.615 138.16 133.148 139.088 134.01 139.253C134.333 139.58 134.85 139.678 135.246 139.251C135.272 139.224 135.298 139.196 135.325 139.172C135.367 139.167 135.408 139.163 135.45 139.158C135.641 139.725 135.831 140.293 136.024 140.858C136.4 141.974 137.839 142.691 138.86 142.04C139.025 142.138 139.187 142.243 139.349 142.348C139.594 142.504 139.843 142.664 140.099 142.814C140.113 142.856 140.128 142.898 140.141 142.938C140.305 143.439 140.991 143.708 141.413 143.42C141.544 143.462 141.678 143.496 141.814 143.523C142.526 143.663 143.244 143.625 143.933 143.388C144.426 143.22 144.896 142.899 145.426 142.856C145.459 142.853 145.494 142.855 145.527 142.854C145.96 143.738 146.948 144.499 147.727 144.758C148.747 145.097 149.792 144.976 150.721 144.561C150.971 145.061 151.286 145.534 151.662 145.972C151.871 146.214 152.248 146.162 152.463 145.972C152.871 145.611 153.277 145.248 153.682 144.885C153.975 144.772 154.271 144.637 154.58 144.511C155.545 144.118 156.604 143.955 157.497 143.387C157.921 143.117 158.32 142.772 158.648 142.373C159.267 142.017 159.835 141.573 160.347 141.065C160.603 141.066 160.869 141.007 161.128 140.876C162.209 140.328 162.778 139.212 162.829 138.071C163.705 136.016 164.222 133.823 164.364 131.579C164.409 130.843 164.417 130.1 164.361 129.363C164.322 128.844 164.191 128.497 163.994 128.028C163.928 127.875 163.868 127.735 163.821 127.58C163.832 127.084 163.839 126.587 163.845 126.092C163.979 125.675 164.219 125.286 164.552 124.959C165.067 124.453 165.303 123.402 164.835 122.776C164.529 122.372 164.225 121.967 163.92 121.562C164.005 119.826 164.422 117.063 163.498 116.773C163.535 116.515 163.614 116.26 163.659 116.004C163.876 114.772 163.747 113.671 163.09 112.595C162.953 112.37 162.837 112.172 162.741 111.979C162.681 111.624 162.622 111.269 162.562 110.915C162.47 110.368 162.379 109.817 162.302 109.262C162.261 108.556 162.224 107.85 162.184 107.143C162.146 106.491 162.104 105.84 162.061 105.187C162.079 104.895 162.104 104.604 162.142 104.312C162.363 102.572 163.076 101.929 164.311 100.72C164.505 100.69 164.697 100.656 164.886 100.617C165.767 100.435 166.689 100.153 167.595 100.254C168.58 100.364 169.461 100.788 170.418 100.246C170.699 100.085 171.318 99.6402 171.371 99.2872C171.375 99.2646 171.379 99.2453 171.386 99.2307C171.452 99.2211 171.538 99.213 171.591 99.2114C172.351 99.1856 173.077 99.4838 173.843 99.4016C174.75 99.3049 175.561 98.9035 176.094 98.3087C176.778 98.4763 177.476 98.5521 178.186 98.4586C178.781 98.3812 179.314 98.1878 179.841 97.9008C180.224 97.6945 180.103 97.6348 180.52 97.8025C181.469 98.1861 182.327 98.6923 183.396 98.4296C183.95 98.2941 184.429 97.9959 184.831 97.5945C184.927 97.501 185.088 97.3608 185.196 97.2286C185.704 97.4849 186.981 98.0636 187.191 98.1152C187.786 98.2603 188.416 98.2377 188.995 98.0443C189.42 97.9024 189.941 97.5155 190.314 97.4365C190.797 97.3334 191.871 98.004 192.448 98.2345C193.46 98.6391 194.531 98.7391 195.556 98.3215C195.908 98.1781 196.594 97.6058 196.857 97.6106C197.286 98.1378 198.482 101.022 198.841 102.074C200.294 106.33 200.67 119.618 200 123.008C199.974 123.108 199.946 123.207 199.919 123.307C199.094 126.255 198.236 129.253 196.857 132C195.556 134.589 193.757 136.92 191.176 138.334C188.499 139.801 185.356 140.186 182.347 139.988C180.409 139.862 178.503 139.474 176.628 138.987C175.648 138.734 174.677 138.452 173.71 138.158C173.288 138.031 172.86 137.912 172.446 137.763C171.716 137.5 171.332 137.48 170.633 137.816C169.996 138.123 169.832 139.027 170.164 139.596C170.704 140.525 171.693 140.589 172.648 140.86C173.621 141.136 174.598 141.4 175.58 141.637C177.464 142.088 179.377 142.435 181.307 142.595C184.763 142.883 188.324 142.438 191.47 140.934C191.825 140.763 192.168 140.581 192.499 140.384C192.377 140.555 192.252 140.726 192.126 140.895C191.777 141.365 192.035 142.163 192.525 142.419C192.68 142.499 192.836 142.577 192.992 142.653C193.013 142.703 193.036 142.753 193.062 142.802C193.51 143.699 194.447 144.228 195.402 144.456C196.537 144.727 197.808 144.535 198.962 144.502C200.032 144.469 201.102 144.437 202.17 144.405C202.423 144.398 202.675 144.39 202.927 144.382C204.197 144.344 205.466 144.307 206.735 144.268C207.867 144.234 207.813 144.321 208.875 143.87C209.349 143.667 209.737 143.38 210.063 142.998C210.267 142.907 210.464 142.804 210.653 142.686C211.261 142.309 211.801 141.803 212.299 141.245C213.144 141.511 214.329 141.265 214.494 140.205C214.759 138.511 216.967 137.787 217.998 136.562C218.831 135.574 219.426 134.28 219.395 133.037C221.493 132.024 222.634 129.356 222.901 127.093C223.025 126.044 223.006 124.92 223.185 123.853C223.265 123.768 223.336 123.677 223.396 123.581C223.922 122.731 224.382 121.856 224.786 120.959C225.335 120.564 225.996 120.321 226.688 120.281C228.389 120.182 228.709 117.895 227.087 117.344C227.079 117.34 227.073 117.339 227.065 117.336C227.504 116.239 227.467 114.942 226.934 113.904C226.956 113.791 226.977 113.679 226.998 113.567C227.909 112.591 228.431 111.236 228.372 109.915C228.788 109.624 229.253 109.398 229.763 109.258C230.55 109.042 230.555 108.084 229.973 107.655C229.738 107.483 229.544 107.281 229.383 107.059C229.785 105.853 229.627 104.459 228.804 103.469C229.326 102.801 229.848 102.134 230.37 101.467C230.716 101.025 230.899 100.275 230.37 99.8562C230.033 99.587 229.695 99.3194 229.355 99.0518Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M191.461 128.225C190.364 128.656 189.068 128.757 187.936 128.391C186.853 128.04 185.87 127.26 185.275 126.279C184.745 125.405 184.524 124.369 184.837 123.335C184.852 123.285 184.9 123.254 184.947 123.241C185.203 123.474 185.362 123.705 185.52 123.935C185.786 124.323 186.054 124.706 186.42 125.038C186.954 125.52 187.673 125.911 188.387 126.04C189.085 126.167 189.801 126.055 190.426 125.722C190.807 125.519 191.114 125.248 191.419 124.976C191.751 124.679 192.077 124.378 192.534 124.211C192.9 124.077 193.285 124.19 193.58 124.414C193.898 124.655 194.126 125.033 194.113 125.428C194.094 126.039 193.825 126.55 193.436 126.971C192.909 127.54 192.164 127.95 191.461 128.225ZM190.159 112.984C191.379 113.724 193.239 115.449 191.926 117.283C190.38 118.901 188.155 117.046 187.058 116.208C186.042 115.557 184.899 117.229 185.843 117.988C193.767 123.839 196.983 113.177 190.776 112.114C190.093 111.996 189.839 112.755 190.159 112.984ZM177.32 102.731C178.984 102.652 180.45 103.397 182.035 103.736C183.5 104.049 184.944 103.861 186.369 103.462C188.681 102.816 189.637 106.347 187.356 107.035C185.695 107.536 183.946 107.57 182.242 107.312C180.728 107.083 179.458 106.348 178.015 105.92C176.776 105.552 175.318 105.705 174.01 105.878L173.502 105.946C172.747 106.047 171.988 106.149 171.241 106.296C170.592 106.424 169.945 106.658 169.283 106.685C169.208 106.688 169.144 106.591 169.192 106.526C169.961 105.473 171.443 104.643 172.621 104.089L172.701 104.051C174.156 103.375 175.7 102.808 177.32 102.731ZM176.71 110.494L176.71 110.458C176.713 109.43 177.313 107.083 178.797 107.083C179.724 107.083 180.287 108.68 180.384 110.327L180.387 110.394C180.43 111.418 180.149 113.655 178.797 113.655C177.43 113.655 176.725 111.536 176.71 110.494ZM198.557 110.494L198.557 110.458C198.555 109.43 197.955 107.083 196.471 107.083C195.567 107.083 195.009 108.601 194.892 110.203L194.884 110.327C194.825 111.316 195.089 113.655 196.471 113.655C197.837 113.655 198.543 111.536 198.557 110.494ZM198.534 101.479L198.641 101.482C200.375 101.541 202.158 102.566 202.621 104.287C202.645 104.376 202.535 104.436 202.469 104.375C201.044 103.044 199.126 104.316 197.698 104.983L197.174 105.224C195.333 106.078 193.24 107.082 191.196 106.446C190.225 106.144 189.609 105.149 189.886 104.144C190.132 103.25 191.214 102.499 192.151 102.822L192.193 102.837C192.955 103.128 193.891 102.833 194.677 102.543L195.323 102.301C196.362 101.908 197.405 101.469 198.534 101.479Z"
      fill="black"
    />
  </Svg>
);
export default SVGComponent;