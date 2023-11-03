import * as React from 'react';
import Svg, {Mask, Rect, Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={226}
    height={32}
    viewBox="0 0 226 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="path-1-outside-1_63_794"
      maskUnits="userSpaceOnUse"
      x={-1}
      y={-1}
      width={228}
      height={34}
      fill="black">
      <Rect fill="white" x={-1} y={-1} width={228} height={34} />
      <Path d="M0.54 31V25.544L18.668 4.028L19.724 7.108H0.936V0.199998H27.468V5.656L9.34 27.172L8.284 24.092H28.128V31H0.54ZM43.9144 31.396C41.0984 31.396 38.6344 30.868 36.5224 29.812C34.4397 28.7267 32.8117 27.26 31.6384 25.412C30.4944 23.5347 29.9224 21.408 29.9224 19.032C29.9224 16.656 30.4797 14.544 31.5944 12.696C32.7384 10.8187 34.3077 9.36667 36.3024 8.34C38.297 7.284 40.541 6.756 43.0344 6.756C45.381 6.756 47.5224 7.24 49.4584 8.208C51.3944 9.14667 52.9344 10.54 54.0784 12.388C55.2224 14.236 55.7944 16.48 55.7944 19.12C55.7944 19.4133 55.7797 19.7507 55.7504 20.132C55.721 20.5133 55.6917 20.8653 55.6624 21.188H36.7864V16.788H51.2184L48.0504 18.02C48.0797 16.9347 47.8744 15.996 47.4344 15.204C47.0237 14.412 46.437 13.796 45.6744 13.356C44.941 12.916 44.0757 12.696 43.0784 12.696C42.081 12.696 41.201 12.916 40.4384 13.356C39.705 13.796 39.133 14.4267 38.7224 15.248C38.3117 16.04 38.1064 16.9787 38.1064 18.064V19.34C38.1064 20.5133 38.341 21.5253 38.8104 22.376C39.309 23.2267 40.013 23.8867 40.9224 24.356C41.8317 24.796 42.917 25.016 44.1784 25.016C45.3517 25.016 46.349 24.8547 47.1704 24.532C48.021 24.18 48.857 23.652 49.6784 22.948L54.0784 27.524C52.9344 28.7853 51.5264 29.7533 49.8544 30.428C48.1824 31.0733 46.2024 31.396 43.9144 31.396ZM75.1808 6.756C77.0288 6.756 78.7008 7.13733 80.1968 7.9C81.6928 8.63333 82.8662 9.77733 83.7168 11.332C84.5968 12.8867 85.0368 14.896 85.0368 17.36V31H76.6768V18.724C76.6768 17.0227 76.3248 15.7907 75.6208 15.028C74.9462 14.236 73.9928 13.84 72.7608 13.84C71.8808 13.84 71.0742 14.0453 70.3408 14.456C69.6075 14.8373 69.0355 15.4387 68.6248 16.26C68.2142 17.0813 68.0088 18.152 68.0088 19.472V31H59.6488V7.152H67.6128V13.928L66.0728 11.948C66.9822 10.2173 68.2288 8.92667 69.8128 8.076C71.3968 7.196 73.1862 6.756 75.1808 6.756ZM90.6816 31V0.199998H104.762C107.578 0.199998 109.998 0.654665 112.022 1.564C114.075 2.47333 115.659 3.79333 116.774 5.524C117.888 7.22533 118.446 9.24933 118.446 11.596C118.446 13.9133 117.888 15.9227 116.774 17.624C115.659 19.296 114.075 20.5867 112.022 21.496C109.998 22.376 107.578 22.816 104.762 22.816H95.5216L99.3936 19.164V31H90.6816ZM109.734 31L102.078 19.78H111.362L119.062 31H109.734ZM99.3936 20.088L95.5216 16.084H104.234C106.052 16.084 107.402 15.688 108.282 14.896C109.191 14.104 109.646 13.004 109.646 11.596C109.646 10.1587 109.191 9.044 108.282 8.252C107.402 7.46 106.052 7.064 104.234 7.064H95.5216L99.3936 3.06V20.088ZM134.824 31.396C132.213 31.396 129.896 30.868 127.872 29.812C125.848 28.756 124.249 27.304 123.076 25.456C121.932 23.5787 121.36 21.4373 121.36 19.032C121.36 16.6267 121.932 14.5 123.076 12.652C124.249 10.804 125.848 9.36667 127.872 8.34C129.896 7.284 132.213 6.756 134.824 6.756C137.435 6.756 139.752 7.284 141.776 8.34C143.829 9.36667 145.428 10.804 146.572 12.652C147.716 14.5 148.288 16.6267 148.288 19.032C148.288 21.4373 147.716 23.5787 146.572 25.456C145.428 27.304 143.829 28.756 141.776 29.812C139.752 30.868 137.435 31.396 134.824 31.396ZM134.824 24.752C135.792 24.752 136.643 24.532 137.376 24.092C138.139 23.652 138.74 23.0067 139.18 22.156C139.62 21.276 139.84 20.2347 139.84 19.032C139.84 17.8293 139.62 16.8173 139.18 15.996C138.74 15.1453 138.139 14.5 137.376 14.06C136.643 13.62 135.792 13.4 134.824 13.4C133.885 13.4 133.035 13.62 132.272 14.06C131.539 14.5 130.937 15.1453 130.468 15.996C130.028 16.8173 129.808 17.8293 129.808 19.032C129.808 20.2347 130.028 21.276 130.468 22.156C130.937 23.0067 131.539 23.652 132.272 24.092C133.035 24.532 133.885 24.752 134.824 24.752ZM162.193 31.396C160.257 31.396 158.511 31.0147 156.957 30.252C155.431 29.4893 154.229 28.3013 153.349 26.688C152.498 25.0453 152.073 22.9773 152.073 20.484V7.152H160.433V19.12C160.433 20.968 160.77 22.288 161.445 23.08C162.149 23.872 163.131 24.268 164.393 24.268C165.214 24.268 165.962 24.0773 166.637 23.696C167.311 23.3147 167.854 22.7133 168.265 21.892C168.675 21.0413 168.881 19.956 168.881 18.636V7.152H177.241V31H169.277V24.268L170.817 26.16C169.995 27.92 168.807 29.24 167.253 30.12C165.698 30.9707 164.011 31.396 162.193 31.396ZM193.273 31.396C190.223 31.396 187.847 30.648 186.145 29.152C184.444 27.6267 183.593 25.3387 183.593 22.288V1.828H191.953V22.2C191.953 23.0507 192.188 23.7253 192.657 24.224C193.127 24.6933 193.728 24.928 194.461 24.928C195.459 24.928 196.309 24.6787 197.013 24.18L199.081 30.032C198.377 30.5013 197.512 30.8387 196.485 31.044C195.459 31.2787 194.388 31.396 193.273 31.396ZM180.117 14.28V8.032H197.409V14.28H180.117ZM214.114 31.396C211.298 31.396 208.834 30.868 206.722 29.812C204.639 28.7267 203.011 27.26 201.838 25.412C200.694 23.5347 200.122 21.408 200.122 19.032C200.122 16.656 200.679 14.544 201.794 12.696C202.938 10.8187 204.507 9.36667 206.502 8.34C208.496 7.284 210.74 6.756 213.234 6.756C215.58 6.756 217.722 7.24 219.658 8.208C221.594 9.14667 223.134 10.54 224.278 12.388C225.422 14.236 225.994 16.48 225.994 19.12C225.994 19.4133 225.979 19.7507 225.95 20.132C225.92 20.5133 225.891 20.8653 225.862 21.188H206.986V16.788H221.418L218.25 18.02C218.279 16.9347 218.074 15.996 217.634 15.204C217.223 14.412 216.636 13.796 215.874 13.356C215.14 12.916 214.275 12.696 213.278 12.696C212.28 12.696 211.4 12.916 210.638 13.356C209.904 13.796 209.332 14.4267 208.922 15.248C208.511 16.04 208.306 16.9787 208.306 18.064V19.34C208.306 20.5133 208.54 21.5253 209.01 22.376C209.508 23.2267 210.212 23.8867 211.122 24.356C212.031 24.796 213.116 25.016 214.378 25.016C215.551 25.016 216.548 24.8547 217.37 24.532C218.22 24.18 219.056 23.652 219.878 22.948L224.278 27.524C223.134 28.7853 221.726 29.7533 220.054 30.428C218.382 31.0733 216.402 31.396 214.114 31.396Z" />
    </Mask>
    <Path
      d="M0.54 31V25.544L18.668 4.028L19.724 7.108H0.936V0.199998H27.468V5.656L9.34 27.172L8.284 24.092H28.128V31H0.54ZM43.9144 31.396C41.0984 31.396 38.6344 30.868 36.5224 29.812C34.4397 28.7267 32.8117 27.26 31.6384 25.412C30.4944 23.5347 29.9224 21.408 29.9224 19.032C29.9224 16.656 30.4797 14.544 31.5944 12.696C32.7384 10.8187 34.3077 9.36667 36.3024 8.34C38.297 7.284 40.541 6.756 43.0344 6.756C45.381 6.756 47.5224 7.24 49.4584 8.208C51.3944 9.14667 52.9344 10.54 54.0784 12.388C55.2224 14.236 55.7944 16.48 55.7944 19.12C55.7944 19.4133 55.7797 19.7507 55.7504 20.132C55.721 20.5133 55.6917 20.8653 55.6624 21.188H36.7864V16.788H51.2184L48.0504 18.02C48.0797 16.9347 47.8744 15.996 47.4344 15.204C47.0237 14.412 46.437 13.796 45.6744 13.356C44.941 12.916 44.0757 12.696 43.0784 12.696C42.081 12.696 41.201 12.916 40.4384 13.356C39.705 13.796 39.133 14.4267 38.7224 15.248C38.3117 16.04 38.1064 16.9787 38.1064 18.064V19.34C38.1064 20.5133 38.341 21.5253 38.8104 22.376C39.309 23.2267 40.013 23.8867 40.9224 24.356C41.8317 24.796 42.917 25.016 44.1784 25.016C45.3517 25.016 46.349 24.8547 47.1704 24.532C48.021 24.18 48.857 23.652 49.6784 22.948L54.0784 27.524C52.9344 28.7853 51.5264 29.7533 49.8544 30.428C48.1824 31.0733 46.2024 31.396 43.9144 31.396ZM75.1808 6.756C77.0288 6.756 78.7008 7.13733 80.1968 7.9C81.6928 8.63333 82.8662 9.77733 83.7168 11.332C84.5968 12.8867 85.0368 14.896 85.0368 17.36V31H76.6768V18.724C76.6768 17.0227 76.3248 15.7907 75.6208 15.028C74.9462 14.236 73.9928 13.84 72.7608 13.84C71.8808 13.84 71.0742 14.0453 70.3408 14.456C69.6075 14.8373 69.0355 15.4387 68.6248 16.26C68.2142 17.0813 68.0088 18.152 68.0088 19.472V31H59.6488V7.152H67.6128V13.928L66.0728 11.948C66.9822 10.2173 68.2288 8.92667 69.8128 8.076C71.3968 7.196 73.1862 6.756 75.1808 6.756ZM90.6816 31V0.199998H104.762C107.578 0.199998 109.998 0.654665 112.022 1.564C114.075 2.47333 115.659 3.79333 116.774 5.524C117.888 7.22533 118.446 9.24933 118.446 11.596C118.446 13.9133 117.888 15.9227 116.774 17.624C115.659 19.296 114.075 20.5867 112.022 21.496C109.998 22.376 107.578 22.816 104.762 22.816H95.5216L99.3936 19.164V31H90.6816ZM109.734 31L102.078 19.78H111.362L119.062 31H109.734ZM99.3936 20.088L95.5216 16.084H104.234C106.052 16.084 107.402 15.688 108.282 14.896C109.191 14.104 109.646 13.004 109.646 11.596C109.646 10.1587 109.191 9.044 108.282 8.252C107.402 7.46 106.052 7.064 104.234 7.064H95.5216L99.3936 3.06V20.088ZM134.824 31.396C132.213 31.396 129.896 30.868 127.872 29.812C125.848 28.756 124.249 27.304 123.076 25.456C121.932 23.5787 121.36 21.4373 121.36 19.032C121.36 16.6267 121.932 14.5 123.076 12.652C124.249 10.804 125.848 9.36667 127.872 8.34C129.896 7.284 132.213 6.756 134.824 6.756C137.435 6.756 139.752 7.284 141.776 8.34C143.829 9.36667 145.428 10.804 146.572 12.652C147.716 14.5 148.288 16.6267 148.288 19.032C148.288 21.4373 147.716 23.5787 146.572 25.456C145.428 27.304 143.829 28.756 141.776 29.812C139.752 30.868 137.435 31.396 134.824 31.396ZM134.824 24.752C135.792 24.752 136.643 24.532 137.376 24.092C138.139 23.652 138.74 23.0067 139.18 22.156C139.62 21.276 139.84 20.2347 139.84 19.032C139.84 17.8293 139.62 16.8173 139.18 15.996C138.74 15.1453 138.139 14.5 137.376 14.06C136.643 13.62 135.792 13.4 134.824 13.4C133.885 13.4 133.035 13.62 132.272 14.06C131.539 14.5 130.937 15.1453 130.468 15.996C130.028 16.8173 129.808 17.8293 129.808 19.032C129.808 20.2347 130.028 21.276 130.468 22.156C130.937 23.0067 131.539 23.652 132.272 24.092C133.035 24.532 133.885 24.752 134.824 24.752ZM162.193 31.396C160.257 31.396 158.511 31.0147 156.957 30.252C155.431 29.4893 154.229 28.3013 153.349 26.688C152.498 25.0453 152.073 22.9773 152.073 20.484V7.152H160.433V19.12C160.433 20.968 160.77 22.288 161.445 23.08C162.149 23.872 163.131 24.268 164.393 24.268C165.214 24.268 165.962 24.0773 166.637 23.696C167.311 23.3147 167.854 22.7133 168.265 21.892C168.675 21.0413 168.881 19.956 168.881 18.636V7.152H177.241V31H169.277V24.268L170.817 26.16C169.995 27.92 168.807 29.24 167.253 30.12C165.698 30.9707 164.011 31.396 162.193 31.396ZM193.273 31.396C190.223 31.396 187.847 30.648 186.145 29.152C184.444 27.6267 183.593 25.3387 183.593 22.288V1.828H191.953V22.2C191.953 23.0507 192.188 23.7253 192.657 24.224C193.127 24.6933 193.728 24.928 194.461 24.928C195.459 24.928 196.309 24.6787 197.013 24.18L199.081 30.032C198.377 30.5013 197.512 30.8387 196.485 31.044C195.459 31.2787 194.388 31.396 193.273 31.396ZM180.117 14.28V8.032H197.409V14.28H180.117ZM214.114 31.396C211.298 31.396 208.834 30.868 206.722 29.812C204.639 28.7267 203.011 27.26 201.838 25.412C200.694 23.5347 200.122 21.408 200.122 19.032C200.122 16.656 200.679 14.544 201.794 12.696C202.938 10.8187 204.507 9.36667 206.502 8.34C208.496 7.284 210.74 6.756 213.234 6.756C215.58 6.756 217.722 7.24 219.658 8.208C221.594 9.14667 223.134 10.54 224.278 12.388C225.422 14.236 225.994 16.48 225.994 19.12C225.994 19.4133 225.979 19.7507 225.95 20.132C225.92 20.5133 225.891 20.8653 225.862 21.188H206.986V16.788H221.418L218.25 18.02C218.279 16.9347 218.074 15.996 217.634 15.204C217.223 14.412 216.636 13.796 215.874 13.356C215.14 12.916 214.275 12.696 213.278 12.696C212.28 12.696 211.4 12.916 210.638 13.356C209.904 13.796 209.332 14.4267 208.922 15.248C208.511 16.04 208.306 16.9787 208.306 18.064V19.34C208.306 20.5133 208.54 21.5253 209.01 22.376C209.508 23.2267 210.212 23.8867 211.122 24.356C212.031 24.796 213.116 25.016 214.378 25.016C215.551 25.016 216.548 24.8547 217.37 24.532C218.22 24.18 219.056 23.652 219.878 22.948L224.278 27.524C223.134 28.7853 221.726 29.7533 220.054 30.428C218.382 31.0733 216.402 31.396 214.114 31.396Z"
      fill="white"
    />
    <Path
      d="M0.54 31H-0.46V32H0.54V31ZM0.54 25.544L-0.224749 24.8997L-0.46 25.1789V25.544H0.54ZM18.668 4.028L19.6139 3.70367L19.0412 2.03308L17.9033 3.38367L18.668 4.028ZM19.724 7.108V8.108H21.124L20.6699 6.78367L19.724 7.108ZM0.936 7.108H-0.0639998V8.108H0.936V7.108ZM0.936 0.199998V-0.800002H-0.0639998V0.199998H0.936ZM27.468 0.199998H28.468V-0.800002H27.468V0.199998ZM27.468 5.656L28.2327 6.30033L28.468 6.02111V5.656H27.468ZM9.34 27.172L8.39405 27.4963L8.96683 29.1669L10.1047 27.8163L9.34 27.172ZM8.284 24.092V23.092H6.884L7.33805 24.4163L8.284 24.092ZM28.128 24.092H29.128V23.092H28.128V24.092ZM28.128 31V32H29.128V31H28.128ZM1.54 31V25.544H-0.46V31H1.54ZM1.30475 26.1883L19.4328 4.67233L17.9033 3.38367L-0.224749 24.8997L1.30475 26.1883ZM17.7221 4.35232L18.7781 7.43232L20.6699 6.78367L19.6139 3.70367L17.7221 4.35232ZM19.724 6.108H0.936V8.108H19.724V6.108ZM1.936 7.108V0.199998H-0.0639998V7.108H1.936ZM0.936 1.2H27.468V-0.800002H0.936V1.2ZM26.468 0.199998V5.656H28.468V0.199998H26.468ZM26.7033 5.01167L8.57525 26.5277L10.1047 27.8163L28.2327 6.30033L26.7033 5.01167ZM10.2859 26.8477L9.22995 23.7677L7.33805 24.4163L8.39405 27.4963L10.2859 26.8477ZM8.284 25.092H28.128V23.092H8.284V25.092ZM27.128 24.092V31H29.128V24.092H27.128ZM28.128 30H0.54V32H28.128V30ZM36.5224 29.812L36.0602 30.6988L36.0677 30.7027L36.0752 30.7064L36.5224 29.812ZM31.6384 25.412L30.7844 25.9324L30.7892 25.9402L30.7942 25.948L31.6384 25.412ZM31.5944 12.696L30.7404 12.1756L30.7381 12.1795L31.5944 12.696ZM36.3024 8.34L36.76 9.22919L36.7703 9.22379L36.3024 8.34ZM49.4584 8.208L49.0111 9.10249L49.0221 9.10781L49.4584 8.208ZM54.0784 12.388L54.9286 11.8616L54.0784 12.388ZM55.7504 20.132L56.7474 20.2087L55.7504 20.132ZM55.6624 21.188V22.188H56.5756L56.6583 21.2785L55.6624 21.188ZM36.7864 21.188H35.7864V22.188H36.7864V21.188ZM36.7864 16.788V15.788H35.7864V16.788H36.7864ZM51.2184 16.788L51.5808 17.72L51.2184 15.788V16.788ZM48.0504 18.02L47.0507 17.993L47.0101 19.4975L48.4128 18.952L48.0504 18.02ZM47.4344 15.204L46.5466 15.6643L46.5532 15.6771L46.5602 15.6896L47.4344 15.204ZM45.6744 13.356L45.1599 14.2135L45.1672 14.2179L45.1747 14.2222L45.6744 13.356ZM40.4384 13.356L39.9387 12.4898L39.9312 12.4941L39.9239 12.4985L40.4384 13.356ZM38.7224 15.248L39.6101 15.7083L39.6135 15.7018L39.6168 15.6952L38.7224 15.248ZM38.8104 22.376L37.9348 22.8591L37.9411 22.8705L37.9477 22.8817L38.8104 22.376ZM40.9224 24.356L40.4637 25.2446L40.4752 25.2505L40.4868 25.2562L40.9224 24.356ZM47.1704 24.532L47.536 25.4628L47.5444 25.4595L47.5527 25.456L47.1704 24.532ZM49.6784 22.948L50.3992 22.2549L49.7446 21.5741L49.0276 22.1887L49.6784 22.948ZM54.0784 27.524L54.8191 28.1958L55.4465 27.5041L54.7992 26.8309L54.0784 27.524ZM49.8544 30.428L50.2145 31.3609L50.2215 31.3582L50.2286 31.3554L49.8544 30.428ZM43.9144 30.396C41.224 30.396 38.9184 29.892 36.9696 28.9176L36.0752 30.7064C38.3503 31.844 40.9728 32.396 43.9144 32.396V30.396ZM36.9845 28.9252C35.0461 27.915 33.5548 26.5647 32.4826 24.876L30.7942 25.948C32.0686 27.9553 33.8333 29.5383 36.0602 30.6988L36.9845 28.9252ZM32.4923 24.8916C31.4515 23.1837 30.9224 21.2398 30.9224 19.032H28.9224C28.9224 21.5762 29.5372 23.8856 30.7844 25.9324L32.4923 24.8916ZM30.9224 19.032C30.9224 16.8191 31.4393 14.8892 32.4507 13.2125L30.7381 12.1795C29.5201 14.1988 28.9224 16.4929 28.9224 19.032H30.9224ZM32.4483 13.2164C33.4946 11.4994 34.9253 10.1735 36.76 9.22913L35.8447 7.45086C33.6901 8.55987 31.9822 10.1379 30.7404 12.1756L32.4483 13.2164ZM36.7703 9.22379C38.6061 8.25185 40.6867 7.756 43.0344 7.756V5.756C40.3953 5.756 37.9879 6.31615 35.8345 7.45621L36.7703 9.22379ZM43.0344 7.756C45.2391 7.756 47.2255 8.20958 49.0112 9.10243L49.9056 7.31357C47.8193 6.27042 45.523 5.756 43.0344 5.756V7.756ZM49.0221 9.10781C50.7857 9.96287 52.1828 11.2258 53.2281 12.9144L54.9286 11.8616C53.6859 9.85417 52.0031 8.33046 49.8946 7.30819L49.0221 9.10781ZM53.2281 12.9144C54.2551 14.5733 54.7944 16.6259 54.7944 19.12H56.7944C56.7944 16.3341 56.1897 13.8987 54.9286 11.8616L53.2281 12.9144ZM54.7944 19.12C54.7944 19.3814 54.7812 19.6923 54.7533 20.0553L56.7474 20.2087C56.7782 19.809 56.7944 19.4452 56.7944 19.12H54.7944ZM54.7533 20.0553C54.7243 20.4328 54.6953 20.7801 54.6665 21.0975L56.6583 21.2785C56.6881 20.9505 56.7178 20.5938 56.7474 20.2087L54.7533 20.0553ZM55.6624 20.188H36.7864V22.188H55.6624V20.188ZM37.7864 21.188V16.788H35.7864V21.188H37.7864ZM36.7864 17.788H51.2184V15.788H36.7864V17.788ZM50.8559 15.856L47.6879 17.088L48.4128 18.952L51.5808 17.72L50.8559 15.856ZM49.05 18.047C49.0832 16.8183 48.8513 15.6954 48.3085 14.7184L46.5602 15.6896C46.8974 16.2966 47.0762 17.051 47.0507 17.993L49.05 18.047ZM48.3221 14.7437C47.8248 13.7845 47.1045 13.0266 46.1741 12.4898L45.1747 14.2222C45.7696 14.5654 46.2226 15.0395 46.5466 15.6643L48.3221 14.7437ZM46.1889 12.4985C45.2759 11.9507 44.2264 11.696 43.0784 11.696V13.696C43.925 13.696 44.6062 13.8813 45.1599 14.2135L46.1889 12.4985ZM43.0784 11.696C41.9293 11.696 40.8726 11.951 39.9387 12.4898L40.9381 14.2222C41.5295 13.881 42.2328 13.696 43.0784 13.696V11.696ZM39.9239 12.4985C39.0154 13.0436 38.3171 13.8224 37.8279 14.8008L39.6168 15.6952C39.949 15.0309 40.3947 14.5484 40.9529 14.2135L39.9239 12.4985ZM37.8346 14.7877C37.3359 15.7495 37.1064 16.8527 37.1064 18.064H39.1064C39.1064 17.1046 39.2875 16.3305 39.6101 15.7083L37.8346 14.7877ZM37.1064 18.064V19.34H39.1064V18.064H37.1064ZM37.1064 19.34C37.1064 20.6474 37.3685 21.8327 37.9348 22.8591L39.686 21.8929C39.3136 21.218 39.1064 20.3793 39.1064 19.34H37.1064ZM37.9477 22.8817C38.5458 23.9021 39.3929 24.6919 40.4637 25.2446L41.381 23.4674C40.6332 23.0814 40.0723 22.5513 39.6731 21.8703L37.9477 22.8817ZM40.4868 25.2562C41.5614 25.7761 42.8028 26.016 44.1784 26.016V24.016C43.0313 24.016 42.102 23.8159 41.3579 23.4558L40.4868 25.2562ZM44.1784 26.016C45.4379 26.016 46.5668 25.8435 47.536 25.4628L46.8047 23.6012C46.1313 23.8658 45.2655 24.016 44.1784 24.016V26.016ZM47.5527 25.456C48.5164 25.0573 49.4413 24.4683 50.3292 23.7073L49.0276 22.1887C48.2728 22.8357 47.5257 23.3027 46.788 23.608L47.5527 25.456ZM48.9575 23.6411L53.3575 28.2171L54.7992 26.8309L50.3992 22.2549L48.9575 23.6411ZM53.3377 26.8522C52.3009 27.9952 51.0207 28.879 49.4802 29.5006L50.2286 31.3554C52.032 30.6276 53.5678 29.5754 54.8191 28.1958L53.3377 26.8522ZM49.4943 29.4951C47.9641 30.0857 46.1118 30.396 43.9144 30.396V32.396C46.2929 32.396 48.4007 32.061 50.2145 31.3609L49.4943 29.4951ZM80.1968 7.9L79.7427 8.7909L79.7496 8.79447L79.7567 8.79792L80.1968 7.9ZM83.7168 11.332L82.8396 11.812L82.843 11.8183L82.8466 11.8246L83.7168 11.332ZM85.0368 31V32H86.0368V31H85.0368ZM76.6768 31H75.6768V32H76.6768V31ZM75.6208 15.028L74.8596 15.6765L74.8725 15.6916L74.886 15.7063L75.6208 15.028ZM70.3408 14.456L70.8022 15.3432L70.8159 15.3361L70.8294 15.3285L70.3408 14.456ZM68.0088 31V32H69.0088V31H68.0088ZM59.6488 31H58.6488V32H59.6488V31ZM59.6488 7.152V6.152H58.6488V7.152H59.6488ZM67.6128 7.152H68.6128V6.152H67.6128V7.152ZM67.6128 13.928L66.8235 14.5419L68.6128 16.8425V13.928H67.6128ZM66.0728 11.948L65.1876 11.4829L64.8879 12.0533L65.2835 12.5619L66.0728 11.948ZM69.8128 8.076L70.286 8.95699L70.2923 8.95362L70.2985 8.95016L69.8128 8.076ZM75.1808 7.756C76.8871 7.756 78.401 8.10694 79.7427 8.7909L80.651 7.00909C79.0007 6.16773 77.1706 5.756 75.1808 5.756V7.756ZM79.7567 8.79792C81.0552 9.43447 82.0813 10.4262 82.8396 11.812L84.5941 10.852C83.651 9.12844 82.3305 7.8322 80.637 7.00208L79.7567 8.79792ZM82.8466 11.8246C83.6153 13.1827 84.0368 15.0062 84.0368 17.36H86.0368C86.0368 14.7858 85.5784 12.5906 84.5871 10.8394L82.8466 11.8246ZM84.0368 17.36V31H86.0368V17.36H84.0368ZM85.0368 30H76.6768V32H85.0368V30ZM77.6768 31V18.724H75.6768V31H77.6768ZM77.6768 18.724C77.6768 16.9225 77.3106 15.3843 76.3557 14.3497L74.886 15.7063C75.3391 16.197 75.6768 17.1228 75.6768 18.724H77.6768ZM76.3821 14.3795C75.4819 13.3228 74.2263 12.84 72.7608 12.84V14.84C73.7594 14.84 74.4104 15.1492 74.8596 15.6765L76.3821 14.3795ZM72.7608 12.84C71.7181 12.84 70.742 13.0852 69.8522 13.5835L70.8294 15.3285C71.4064 15.0054 72.0436 14.84 72.7608 14.84V12.84ZM69.8795 13.5688C68.9383 14.0582 68.2244 14.8247 67.7304 15.8128L69.5193 16.7072C69.8466 16.0526 70.2767 15.6165 70.8022 15.3432L69.8795 13.5688ZM67.7304 15.8128C67.2267 16.8202 67.0088 18.0599 67.0088 19.472H69.0088C69.0088 18.244 69.2016 17.3425 69.5193 16.7072L67.7304 15.8128ZM67.0088 19.472V31H69.0088V19.472H67.0088ZM68.0088 30H59.6488V32H68.0088V30ZM60.6488 31V7.152H58.6488V31H60.6488ZM59.6488 8.152H67.6128V6.152H59.6488V8.152ZM66.6128 7.152V13.928H68.6128V7.152H66.6128ZM68.4022 13.3141L66.8622 11.3341L65.2835 12.5619L66.8235 14.5419L68.4022 13.3141ZM66.9581 12.4131C67.7831 10.8429 68.8932 9.70498 70.286 8.95699L69.3397 7.195C67.5645 8.14835 66.1813 9.59171 65.1876 11.4829L66.9581 12.4131ZM70.2985 8.95016C71.7193 8.1608 73.3386 7.756 75.1808 7.756V5.756C73.0338 5.756 71.0744 6.23119 69.3272 7.20184L70.2985 8.95016ZM90.6816 31H89.6816V32H90.6816V31ZM90.6816 0.199998V-0.800002H89.6816V0.199998H90.6816ZM112.022 1.564L111.612 2.47618L111.617 2.47835L112.022 1.564ZM116.774 5.524L115.933 6.06549L115.937 6.07202L116.774 5.524ZM116.774 17.624L117.606 18.1787L117.61 18.172L116.774 17.624ZM112.022 21.496L112.42 22.4131L112.426 22.4104L112.022 21.496ZM95.5216 22.816L94.8354 22.0885L93.0039 23.816H95.5216V22.816ZM99.3936 19.164H100.394V16.8462L98.7074 18.4365L99.3936 19.164ZM99.3936 31V32H100.394V31H99.3936ZM109.734 31L108.908 31.5636L109.205 32H109.734V31ZM102.078 19.78V18.78H100.185L101.252 20.3436L102.078 19.78ZM111.362 19.78L112.186 19.2142L111.888 18.78H111.362V19.78ZM119.062 31V32H120.961L119.886 30.4342L119.062 31ZM99.3936 20.088L98.6747 20.7832L100.394 22.5606V20.088H99.3936ZM95.5216 16.084V15.084H93.1634L94.8027 16.7792L95.5216 16.084ZM108.282 14.896L107.625 14.1419L107.619 14.1473L107.613 14.1527L108.282 14.896ZM108.282 8.252L107.613 8.99529L107.619 9.00074L107.625 9.00608L108.282 8.252ZM95.5216 7.064L94.8027 6.36884L93.1634 8.064H95.5216V7.064ZM99.3936 3.06H100.394V0.587385L98.6747 2.36484L99.3936 3.06ZM91.6816 31V0.199998H89.6816V31H91.6816ZM90.6816 1.2H104.762V-0.800002H90.6816V1.2ZM104.762 1.2C107.473 1.2 109.746 1.63809 111.612 2.47617L112.431 0.65183C110.249 -0.328758 107.682 -0.800002 104.762 -0.800002V1.2ZM111.617 2.47835C113.508 3.3161 114.934 4.51388 115.933 6.06548L117.614 4.98252C116.384 3.07279 114.641 1.63056 112.426 0.64965L111.617 2.47835ZM115.937 6.07202C116.929 7.5866 117.446 9.41334 117.446 11.596H119.446C119.446 9.08532 118.847 6.86407 117.61 4.97597L115.937 6.07202ZM117.446 11.596C117.446 13.7465 116.931 15.5594 115.937 17.076L117.61 18.172C118.846 16.286 119.446 14.0801 119.446 11.596H117.446ZM115.942 17.0693C114.944 18.5652 113.517 19.7399 111.617 20.5816L112.426 22.4104C114.632 21.4334 116.374 20.0268 117.606 18.1787L115.942 17.0693ZM111.623 20.5789C109.754 21.3914 107.477 21.816 104.762 21.816V23.816C107.678 23.816 110.241 23.3606 112.42 22.4131L111.623 20.5789ZM104.762 21.816H95.5216V23.816H104.762V21.816ZM96.2077 23.5435L100.08 19.8915L98.7074 18.4365L94.8354 22.0885L96.2077 23.5435ZM98.3936 19.164V31H100.394V19.164H98.3936ZM99.3936 30H90.6816V32H99.3936V30ZM110.56 30.4364L102.904 19.2164L101.252 20.3436L108.908 31.5636L110.56 30.4364ZM102.078 20.78H111.362V18.78H102.078V20.78ZM110.537 20.3458L118.237 31.5658L119.886 30.4342L112.186 19.2142L110.537 20.3458ZM119.062 30H109.734V32H119.062V30ZM100.112 19.3928L96.2404 15.3888L94.8027 16.7792L98.6747 20.7832L100.112 19.3928ZM95.5216 17.084H104.234V15.084H95.5216V17.084ZM104.234 17.084C106.172 17.084 107.81 16.6657 108.951 15.6393L107.613 14.1527C106.993 14.7103 105.933 15.084 104.234 15.084V17.084ZM108.938 15.6501C110.103 14.6356 110.646 13.2396 110.646 11.596H108.646C108.646 12.7684 108.279 13.5724 107.625 14.1419L108.938 15.6501ZM110.646 11.596C110.646 9.9304 110.108 8.51647 108.938 7.49792L107.625 9.00608C108.274 9.57153 108.646 10.3869 108.646 11.596H110.646ZM108.951 7.50871C107.81 6.48235 106.172 6.064 104.234 6.064V8.064C105.933 8.064 106.993 8.43765 107.613 8.99529L108.951 7.50871ZM104.234 6.064H95.5216V8.064H104.234V6.064ZM96.2404 7.75916L100.112 3.75516L98.6747 2.36484L94.8027 6.36884L96.2404 7.75916ZM98.3936 3.06V20.088H100.394V3.06H98.3936ZM127.872 29.812L128.334 28.9254L127.872 29.812ZM123.076 25.456L122.222 25.9764L122.227 25.9842L122.232 25.992L123.076 25.456ZM123.076 12.652L122.232 12.116L122.226 12.1256L123.076 12.652ZM127.872 8.34L128.324 9.23188L128.334 9.22658L127.872 8.34ZM141.776 8.34L141.313 9.22658L141.321 9.23057L141.329 9.23442L141.776 8.34ZM146.572 12.652L145.722 13.1784V13.1784L146.572 12.652ZM146.572 25.456L147.422 25.9824L147.426 25.9764L146.572 25.456ZM141.776 29.812L141.319 28.9227L141.313 28.9254L141.776 29.812ZM137.376 24.092L136.876 23.2258L136.869 23.2301L136.861 23.2345L137.376 24.092ZM139.18 22.156L140.068 22.6155L140.074 22.6032L139.18 22.156ZM139.18 15.996L138.292 16.4554L138.295 16.4618L138.298 16.4682L139.18 15.996ZM137.376 14.06L136.861 14.9175L136.869 14.9219L136.876 14.9262L137.376 14.06ZM132.272 14.06L131.772 13.1938L131.765 13.1981L131.757 13.2025L132.272 14.06ZM130.468 15.996L129.592 15.5129L129.586 15.5238L130.468 15.996ZM130.468 22.156L129.573 22.6032L129.583 22.6213L129.592 22.6391L130.468 22.156ZM132.272 24.092L131.757 24.9495L131.765 24.9539L131.772 24.9582L132.272 24.092ZM134.824 30.396C132.351 30.396 130.196 29.8968 128.334 28.9254L127.409 30.6986C129.595 31.8392 132.075 32.396 134.824 32.396V30.396ZM128.334 28.9254C126.459 27.9471 124.995 26.6131 123.92 24.92L122.232 25.992C123.503 27.9949 125.236 29.5649 127.409 30.6986L128.334 28.9254ZM123.93 24.9356C122.89 23.2296 122.36 21.2716 122.36 19.032H120.36C120.36 21.603 120.974 23.9277 122.222 25.9764L123.93 24.9356ZM122.36 19.032C122.36 16.7922 122.89 14.8517 123.926 13.1784L122.226 12.1256C120.973 14.1483 120.36 16.4612 120.36 19.032H122.36ZM123.92 13.188C124.993 11.4974 126.454 10.1804 128.324 9.23182L127.419 7.44817C125.241 8.55297 123.505 10.1106 122.232 12.116L123.92 13.188ZM128.334 9.22658C130.196 8.25517 132.351 7.756 134.824 7.756V5.756C132.075 5.756 129.595 6.31283 127.409 7.45341L128.334 9.22658ZM134.824 7.756C137.297 7.756 139.451 8.25517 141.313 9.22658L142.238 7.45341C140.052 6.31283 137.572 5.756 134.824 5.756V7.756ZM141.329 9.23442C143.226 10.183 144.681 11.4971 145.722 13.1784L147.422 12.1256C146.175 10.1109 144.433 8.5503 142.223 7.44557L141.329 9.23442ZM145.722 13.1784C146.757 14.8517 147.288 16.7922 147.288 19.032H149.288C149.288 16.4612 148.674 14.1483 147.422 12.1256L145.722 13.1784ZM147.288 19.032C147.288 21.2716 146.758 23.2296 145.718 24.9356L147.426 25.9764C148.674 23.9277 149.288 21.603 149.288 19.032H147.288ZM145.722 24.9296C144.679 26.6135 143.221 27.9444 141.319 28.9227L142.233 30.7013C144.438 29.5676 146.177 27.9945 147.422 25.9824L145.722 24.9296ZM141.313 28.9254C139.451 29.8968 137.297 30.396 134.824 30.396V32.396C137.572 32.396 140.052 31.8392 142.238 30.6986L141.313 28.9254ZM134.824 25.752C135.949 25.752 136.982 25.4946 137.89 24.9495L136.861 23.2345C136.303 23.5694 135.635 23.752 134.824 23.752V25.752ZM137.876 24.9582C138.819 24.4142 139.548 23.6205 140.068 22.6154L138.292 21.6966C137.932 22.3928 137.459 22.8898 136.876 23.2258L137.876 24.9582ZM140.074 22.6032C140.597 21.5569 140.84 20.3559 140.84 19.032H138.84C138.84 20.1134 138.642 20.9951 138.285 21.7088L140.074 22.6032ZM140.84 19.032C140.84 17.7111 140.599 16.5265 140.061 15.5238L138.298 16.4682C138.641 17.1082 138.84 17.9476 138.84 19.032H140.84ZM140.068 15.5366C139.548 14.5315 138.819 13.7378 137.876 13.1938L136.876 14.9262C137.459 15.2622 137.932 15.7592 138.292 16.4554L140.068 15.5366ZM137.89 13.2025C136.982 12.6574 135.949 12.4 134.824 12.4V14.4C135.635 14.4 136.303 14.5826 136.861 14.9175L137.89 13.2025ZM134.824 12.4C133.722 12.4 132.697 12.6603 131.772 13.1938L132.772 14.9262C133.372 14.5797 134.049 14.4 134.824 14.4V12.4ZM131.757 13.2025C130.853 13.7451 130.135 14.5292 129.592 15.5129L131.343 16.4791C131.739 15.7615 132.224 15.2549 132.786 14.9175L131.757 13.2025ZM129.586 15.5238C129.049 16.5265 128.808 17.7111 128.808 19.032H130.808C130.808 17.9476 131.007 17.1082 131.349 16.4682L129.586 15.5238ZM128.808 19.032C128.808 20.3559 129.05 21.5569 129.573 22.6032L131.362 21.7088C131.005 20.9951 130.808 20.1134 130.808 19.032H128.808ZM129.592 22.6391C130.135 23.6228 130.853 24.4069 131.757 24.9495L132.786 23.2345C132.224 22.8971 131.739 22.3905 131.343 21.6729L129.592 22.6391ZM131.772 24.9582C132.697 25.4917 133.722 25.752 134.824 25.752V23.752C134.049 23.752 133.372 23.5723 132.772 23.2258L131.772 24.9582ZM156.957 30.252L156.509 31.1465L156.516 31.1498L156.957 30.252ZM153.349 26.688L152.461 27.1479L152.466 27.1574L152.471 27.1669L153.349 26.688ZM152.073 7.152V6.152H151.073V7.152H152.073ZM160.433 7.152H161.433V6.152H160.433V7.152ZM161.445 23.08L160.683 23.7285L160.69 23.7365L160.697 23.7444L161.445 23.08ZM168.265 21.892L169.159 22.3393L169.165 22.3267L168.265 21.892ZM168.881 7.152V6.152H167.881V7.152H168.881ZM177.241 7.152H178.241V6.152H177.241V7.152ZM177.241 31V32H178.241V31H177.241ZM169.277 31H168.277V32H169.277V31ZM169.277 24.268L170.052 23.6367L168.277 21.4553V24.268H169.277ZM170.817 26.16L171.723 26.5829L171.988 26.0149L171.592 25.5287L170.817 26.16ZM167.253 30.12L167.733 30.9973L167.739 30.9938L167.745 30.9903L167.253 30.12ZM162.193 30.396C160.391 30.396 158.799 30.0421 157.397 29.3542L156.516 31.1498C158.223 31.9873 160.122 32.396 162.193 32.396V30.396ZM157.404 29.3576C156.075 28.6934 155.017 27.6579 154.226 26.2091L152.471 27.1669C153.44 28.9448 154.787 30.2853 156.509 31.1464L157.404 29.3576ZM154.237 26.2281C153.481 24.7683 153.073 22.8704 153.073 20.484H151.073C151.073 23.0842 151.515 25.3224 152.461 27.1479L154.237 26.2281ZM153.073 20.484V7.152H151.073V20.484H153.073ZM152.073 8.152H160.433V6.152H152.073V8.152ZM159.433 7.152V19.12H161.433V7.152H159.433ZM159.433 19.12C159.433 21.0399 159.773 22.6602 160.683 23.7285L162.206 22.4315C161.766 21.9158 161.433 20.8961 161.433 19.12H159.433ZM160.697 23.7444C161.627 24.7906 162.905 25.268 164.393 25.268V23.268C163.357 23.268 162.67 22.9534 162.192 22.4156L160.697 23.7444ZM164.393 25.268C165.376 25.268 166.295 25.0378 167.129 24.5666L166.145 22.8254C165.629 23.1168 165.052 23.268 164.393 23.268V25.268ZM167.129 24.5666C168.007 24.0703 168.676 23.305 169.159 22.3392L167.37 21.4448C167.032 22.1217 166.616 22.559 166.145 22.8254L167.129 24.5666ZM169.165 22.3267C169.662 21.2977 169.881 20.0504 169.881 18.636H167.881C167.881 19.8616 167.689 20.785 167.364 21.4572L169.165 22.3267ZM169.881 18.636V7.152H167.881V18.636H169.881ZM168.881 8.152H177.241V6.152H168.881V8.152ZM176.241 7.152V31H178.241V7.152H176.241ZM177.241 30H169.277V32H177.241V30ZM170.277 31V24.268H168.277V31H170.277ZM168.501 24.8993L170.041 26.7913L171.592 25.5287L170.052 23.6367L168.501 24.8993ZM169.91 25.7371C169.169 27.3259 168.118 28.4812 166.76 29.2497L167.745 30.9903C169.497 29.9988 170.822 28.5141 171.723 26.5829L169.91 25.7371ZM166.773 29.2427C165.369 30.0107 163.848 30.396 162.193 30.396V32.396C164.174 32.396 166.027 31.9306 167.733 30.9973L166.773 29.2427ZM186.145 29.152L185.478 29.8966L185.485 29.903L186.145 29.152ZM183.593 1.828V0.827998H182.593V1.828H183.593ZM191.953 1.828H192.953V0.827998H191.953V1.828ZM192.657 24.224L191.929 24.9094L191.94 24.9204L191.95 24.9311L192.657 24.224ZM197.013 24.18L197.956 23.8468L197.515 22.599L196.435 23.364L197.013 24.18ZM199.081 30.032L199.636 30.8641L200.284 30.4324L200.024 29.6988L199.081 30.032ZM196.485 31.044L196.289 30.0634L196.276 30.0661L196.263 30.0691L196.485 31.044ZM180.117 14.28H179.117V15.28H180.117V14.28ZM180.117 8.032V7.032H179.117V8.032H180.117ZM197.409 8.032H198.409V7.032H197.409V8.032ZM197.409 14.28V15.28H198.409V14.28H197.409ZM193.273 30.396C190.381 30.396 188.269 29.6881 186.806 28.401L185.485 29.903C187.424 31.6079 190.065 32.396 193.273 32.396V30.396ZM186.813 28.4074C185.388 27.1296 184.593 25.1546 184.593 22.288H182.593C182.593 25.5228 183.5 28.1237 185.478 29.8966L186.813 28.4074ZM184.593 22.288V1.828H182.593V22.288H184.593ZM183.593 2.828H191.953V0.827998H183.593V2.828ZM190.953 1.828V22.2H192.953V1.828H190.953ZM190.953 22.2C190.953 23.2407 191.245 24.1829 191.929 24.9094L193.386 23.5386C193.131 23.2678 192.953 22.8606 192.953 22.2H190.953ZM191.95 24.9311C192.628 25.6085 193.493 25.928 194.461 25.928V23.928C193.963 23.928 193.626 23.7782 193.365 23.5169L191.95 24.9311ZM194.461 25.928C195.632 25.928 196.693 25.6323 197.591 24.996L196.435 23.364C195.926 23.725 195.285 23.928 194.461 23.928V25.928ZM196.071 24.5132L198.139 30.3652L200.024 29.6988L197.956 23.8468L196.071 24.5132ZM198.527 29.2C197.954 29.5818 197.217 29.8778 196.289 30.0634L196.682 32.0246C197.807 31.7995 198.801 31.4208 199.636 30.8641L198.527 29.2ZM196.263 30.0691C195.313 30.2862 194.317 30.396 193.273 30.396V32.396C194.459 32.396 195.604 32.2712 196.708 32.0189L196.263 30.0691ZM181.117 14.28V8.032H179.117V14.28H181.117ZM180.117 9.032H197.409V7.032H180.117V9.032ZM196.409 8.032V14.28H198.409V8.032H196.409ZM197.409 13.28H180.117V15.28H197.409V13.28ZM206.722 29.812L206.259 30.6988L206.267 30.7027L206.274 30.7064L206.722 29.812ZM201.838 25.412L200.984 25.9324L200.988 25.9402L200.993 25.948L201.838 25.412ZM201.794 12.696L200.94 12.1756L200.937 12.1795L201.794 12.696ZM206.502 8.34L206.959 9.22919L206.969 9.22379L206.502 8.34ZM219.658 8.208L219.21 9.10249L219.221 9.10781L219.658 8.208ZM224.278 12.388L225.128 11.8616L224.278 12.388ZM225.95 20.132L226.947 20.2087L225.95 20.132ZM225.862 21.188V22.188H226.775L226.857 21.2785L225.862 21.188ZM206.986 21.188H205.986V22.188H206.986V21.188ZM206.986 16.788V15.788H205.986V16.788H206.986ZM221.418 16.788L221.78 17.72L221.418 15.788V16.788ZM218.25 18.02L217.25 17.993L217.209 19.4975L218.612 18.952L218.25 18.02ZM217.634 15.204L216.746 15.6643L216.752 15.6771L216.759 15.6896L217.634 15.204ZM215.874 13.356L215.359 14.2135L215.366 14.2179L215.374 14.2222L215.874 13.356ZM210.638 13.356L210.138 12.4898L210.13 12.4941L210.123 12.4985L210.638 13.356ZM208.922 15.248L209.809 15.7083L209.813 15.7018L209.816 15.6952L208.922 15.248ZM209.01 22.376L208.134 22.8591L208.14 22.8705L208.147 22.8817L209.01 22.376ZM211.122 24.356L210.663 25.2446L210.674 25.2505L210.686 25.2562L211.122 24.356ZM217.37 24.532L217.735 25.4628L217.744 25.4595L217.752 25.456L217.37 24.532ZM219.878 22.948L220.598 22.2549L219.944 21.5741L219.227 22.1887L219.878 22.948ZM224.278 27.524L225.018 28.1958L225.646 27.5041L224.998 26.8309L224.278 27.524ZM220.054 30.428L220.414 31.3609L220.421 31.3582L220.428 31.3554L220.054 30.428ZM214.114 30.396C211.423 30.396 209.118 29.892 207.169 28.9176L206.274 30.7064C208.55 31.844 211.172 32.396 214.114 32.396V30.396ZM207.184 28.9252C205.245 27.915 203.754 26.5647 202.682 24.876L200.993 25.948C202.268 27.9553 204.033 29.5383 206.259 30.6988L207.184 28.9252ZM202.692 24.8916C201.651 23.1837 201.122 21.2398 201.122 19.032H199.122C199.122 21.5762 199.736 23.8856 200.984 25.9324L202.692 24.8916ZM201.122 19.032C201.122 16.8191 201.639 14.8892 202.65 13.2125L200.937 12.1795C199.719 14.1988 199.122 16.4929 199.122 19.032H201.122ZM202.648 13.2164C203.694 11.4994 205.125 10.1735 206.959 9.22913L206.044 7.45086C203.889 8.55987 202.181 10.1379 200.94 12.1756L202.648 13.2164ZM206.969 9.22379C208.805 8.25185 210.886 7.756 213.234 7.756V5.756C210.595 5.756 208.187 6.31615 206.034 7.45621L206.969 9.22379ZM213.234 7.756C215.438 7.756 217.425 8.20958 219.21 9.10243L220.105 7.31357C218.019 6.27042 215.722 5.756 213.234 5.756V7.756ZM219.221 9.10781C220.985 9.96287 222.382 11.2258 223.427 12.9144L225.128 11.8616C223.885 9.85417 222.202 8.33046 220.094 7.30819L219.221 9.10781ZM223.427 12.9144C224.454 14.5733 224.994 16.6259 224.994 19.12H226.994C226.994 16.3341 226.389 13.8987 225.128 11.8616L223.427 12.9144ZM224.994 19.12C224.994 19.3814 224.98 19.6923 224.953 20.0553L226.947 20.2087C226.977 19.809 226.994 19.4452 226.994 19.12H224.994ZM224.953 20.0553C224.924 20.4328 224.895 20.7801 224.866 21.0975L226.857 21.2785C226.887 20.9505 226.917 20.5938 226.947 20.2087L224.953 20.0553ZM225.862 20.188H206.986V22.188H225.862V20.188ZM207.986 21.188V16.788H205.986V21.188H207.986ZM206.986 17.788H221.418V15.788H206.986V17.788ZM221.055 15.856L217.887 17.088L218.612 18.952L221.78 17.72L221.055 15.856ZM219.249 18.047C219.282 16.8183 219.051 15.6954 218.508 14.7184L216.759 15.6896C217.097 16.2966 217.275 17.051 217.25 17.993L219.249 18.047ZM218.521 14.7437C218.024 13.7845 217.304 13.0266 216.373 12.4898L215.374 14.2222C215.969 14.5654 216.422 15.0395 216.746 15.6643L218.521 14.7437ZM216.388 12.4985C215.475 11.9507 214.426 11.696 213.278 11.696V13.696C214.124 13.696 214.805 13.8813 215.359 14.2135L216.388 12.4985ZM213.278 11.696C212.129 11.696 211.072 11.951 210.138 12.4898L211.137 14.2222C211.729 13.881 212.432 13.696 213.278 13.696V11.696ZM210.123 12.4985C209.215 13.0436 208.516 13.8224 208.027 14.8008L209.816 15.6952C210.148 15.0309 210.594 14.5484 211.152 14.2135L210.123 12.4985ZM208.034 14.7877C207.535 15.7495 207.306 16.8527 207.306 18.064H209.306C209.306 17.1046 209.487 16.3305 209.809 15.7083L208.034 14.7877ZM207.306 18.064V19.34H209.306V18.064H207.306ZM207.306 19.34C207.306 20.6474 207.568 21.8327 208.134 22.8591L209.885 21.8929C209.513 21.218 209.306 20.3793 209.306 19.34H207.306ZM208.147 22.8817C208.745 23.9021 209.592 24.6919 210.663 25.2446L211.58 23.4674C210.832 23.0814 210.271 22.5513 209.872 21.8703L208.147 22.8817ZM210.686 25.2562C211.761 25.7761 213.002 26.016 214.378 26.016V24.016C213.231 24.016 212.301 23.8159 211.557 23.4558L210.686 25.2562ZM214.378 26.016C215.637 26.016 216.766 25.8435 217.735 25.4628L217.004 23.6012C216.331 23.8658 215.465 24.016 214.378 24.016V26.016ZM217.752 25.456C218.716 25.0573 219.641 24.4683 220.528 23.7073L219.227 22.1887C218.472 22.8357 217.725 23.3027 216.987 23.608L217.752 25.456ZM219.157 23.6411L223.557 28.2171L224.998 26.8309L220.598 22.2549L219.157 23.6411ZM223.537 26.8522C222.5 27.9952 221.22 28.879 219.679 29.5006L220.428 31.3554C222.231 30.6276 223.767 29.5754 225.018 28.1958L223.537 26.8522ZM219.694 29.4951C218.163 30.0857 216.311 30.396 214.114 30.396V32.396C216.492 32.396 218.6 32.061 220.414 31.3609L219.694 29.4951Z"
      fill="#18191F"
      mask="url(#path-1-outside-1_63_794)"
    />
  </Svg>
);
export default SVGComponent;