import React, { useEffect, useState } from "react";
import { account } from "../appwrite/AppwriteAuth";
import { useNavigate, Link } from "react-router-dom";
import classes from "./styles/Profile.module.css";
import {
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import "swiper/css/bundle";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

function Profile() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const logOut = async (e) => {
    e.preventDefault();

    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const swiperRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {userDetails ? (
        <>
          <div className={classes.header}>
            <div>
              <p className="text-xl">Welcome, {userDetails.name}</p>
            </div>

            <div>
              <button className={classes.btn} onClick={logOut}>
                Logout
              </button>
            </div>
          </div>

          <div className={classes.caption}>
            <h1>
              BACKEND IS COMPLICATED, <span>APPWRITE IS SIMPLE</span>
            </h1>
          </div>

          <div className={classes.overall}>
            <div className={classes.messageGeneral}>
              <div className={classes.message}>
                <div className={classes.messageRight}>
                  <div>
                    Build Fast. <br />
                  </div>
                  <div>
                    Scale Big. <br />
                  </div>
                  <div>
                    All in One Place. <br />
                  </div>
                </div>
                <div className={classes.messageLeft}>
                  <div>The Cloud is Yours!</div>
                </div>

                <div className={classes.top}>
                  <div className={`${classes.cloud} ${classes.x1}`}></div>
                  {/* <div className={`${classes.cloud} ${classes.x2}`}></div>
                <div className={`${classes.cloud} ${classes.x3}`}></div>
                <div className={`${classes.cloud} ${classes.x4}`}></div> */}
                </div>
              </div>

              <div className={classes.question}>
                <h1>
                  WHY <span>APPWRITE</span> ?
                </h1>

                <p>
                  Appwrite is a backend platform for creating Web, mobile, and
                  Flutter applications. Built in collaboration with the open
                  source community and enhanced for developer experience in the
                  coding languages you adore.
                </p>
              </div>
            </div>

            <div className={classes.awards}>
              <img
                src="https://appwrite.io/images-ee/console/product-hunt-golden-kitty-dark-feather.svg"
                alt="profile"
              />
              <img
                src="https://appwrite.io/images-ee/console/product-hunt-dark-feather.svg"
                alt="profile"
              />
            </div>

            <div className={classes.features}>
              <div className={classes.featuresTop}>
                <h1>Features</h1>
                <h2> All the APIs for building incredible products </h2>
              </div>

              <div className={classes.slotLine1ArrowsBaTop}>
                <div
                  className={classes.slotArrowLeftBaTop}
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  <h3>&#10094;</h3>
                </div>
                <div
                  className={classes.slotArrowRightBaTop}
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  <h3>&#10095; </h3>
                </div>
              </div>

              <div className={classes.featuresSwiper}>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={3}
                  speed={2000}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  ref={swiperRef}
                >
                  <SwiperSlide>
                    <div className={classes.featuresFlex1}>
                      <img
                        src="https://appwrite.io/images-ee/cloud/icon-database.png"
                        alt="data"
                      />
                      <h2>Database</h2>
                      <p>
                        Store, query and manage access to your app data in
                        real-time with a robust and scalable database.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.featuresFlex1}>
                      <img
                        src="https://appwrite.io/images-ee/cloud/icon-users.png"
                        alt="data"
                      />
                      <h2>Authentication</h2>
                      <p>
                        Effortless user logins and management with a suite of
                        authentication methods and OAuth providers
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.featuresFlex1}>
                      <img
                        src="https://appwrite.io/images-ee/cloud/icon-storage.png"
                        alt="data"
                      />
                      <h2>Storage</h2>
                      <p>
                        Store and serve media and files with built in
                        compression and encryption
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.featuresFlex1}>
                      <img
                        src="https://appwrite.io/images-ee/cloud/icon-functions.png"
                        alt="data"
                      />
                      <h2>Functions</h2>
                      <p>
                        Extend Appwrite’s functionality using your favourite
                        language with serverless functions that scale on demand
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.featuresFlex1}>
                      <img
                        src="https://appwrite.io/images-ee/cloud/icon-security.png"
                        alt="data"
                      />
                      <h2>Security & Privacy</h2>
                      <p>
                        Built-in SSL certificates, encryption, abuse control,
                        audit logs, RBAC and more to ensure security, privacy
                        and peace of mind
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.featuresFlex1}>
                      <img
                        src="https://appwrite.io/images-ee/cloud/icon-realtime.png"
                        alt="data"
                      />
                      <h2>Realtime</h2>
                      <p>
                        A Realtime database. Realtime Storage. Realtime
                        everything. Subscribe and listen to
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className={classes.TweetGeneral}>
              <div className={classes.TweetGeneralFlex1}>
                <div className={classes.TweetGeneralFlex1Flex}>
                  <div className={classes.TweetGeneral1Cover}>
                    <div className={classes.TweetGeneral1}>
                      <div className={classes.TweetGeneral1Top}>
                        <img
                          src="https://appwrite.io/images/testimonials/apoorvdwi.png"
                          alt="profile"
                        />
                        <div className={classes.TweetGeneral1User}>
                          <h4>Apoorv Dwivedi</h4>
                          <p>@Apoorvdwi</p>
                        </div>
                      </div>
                      <img
                        src="https://appwrite.io/images/testimonials/twitter.svg"
                        alt="tweet"
                        width={"25px"}
                      />
                    </div>

                    <h3>
                      I enjoyed working with <span> Appwrite</span> and their
                      support team is way too good with really fast responses.
                      While working on the project, I even got 2 PRs merged for
                      bugs I spotted and the contribution lifecycle was
                      incredibly fast from opening an issue to getting the PR
                      merged 100 💯.
                    </h3>
                  </div>

                  <div className={classes.TweetGeneral1Cover2}>
                    <div className={classes.TweetGeneral1}>
                      <div className={classes.TweetGeneral1Top}>
                        <img
                          src="https://appwrite.io/images/testimonials/kasperskyguru.png"
                          alt="profile"
                        />
                        <div className={classes.TweetGeneral1User}>
                          <h4>Kap.ts</h4>
                          <p>@Kapperskyguru</p>
                        </div>
                      </div>
                      <img
                        src="https://appwrite.io/images/testimonials/twitter.svg"
                        alt="tweet"
                        width={"25px"}
                      />
                    </div>

                    <h3>
                      Backend Engineers, you will agree with me that building
                      the AUTH process for you app everytime is a pain. We all
                      suffers it everytime on each new API development. Here's
                      my secret, I allow
                      <span> Appwrite</span> handle my Auth process while I
                      focus on the real business logic.
                    </h3>
                  </div>

                  <div className={classes.TweetGeneral1Cover3}>
                    <div className={classes.TweetGeneral1}>
                      <div className={classes.TweetGeneral1Top}>
                        <img
                          src="https://appwrite.io/images/testimonials/championswimmer.png"
                          alt="profile"
                        />
                        <div className={classes.TweetGeneral1User}>
                          <h4>Arnav Gupta</h4>
                          <p>@championswimmer</p>
                        </div>
                      </div>
                      <img
                        src="https://appwrite.io/images/testimonials/twitter.svg"
                        alt="tweet"
                        width={"25px"}
                      />
                    </div>

                    <h3>
                      Just checked out <span>Appwrite</span> and it seems like a
                      strong contender for the assemble-over-build future.
                    </h3>
                  </div>
                  <div className={classes.TweetGeneral1Cover4}>
                    <div className={classes.TweetGeneral1}>
                      <div className={classes.TweetGeneral1Top}>
                        <img
                          src="https://appwrite.io/images/testimonials/ggsotillo.png"
                          alt="profile"
                        />
                        <div className={classes.TweetGeneral1User}>
                          <h4>Gilbert Gonzalez</h4>
                          <p>@ggsotillo</p>
                        </div>
                      </div>
                      <img
                        src="https://appwrite.io/images/testimonials/producthunt.svg"
                        alt="tweet"
                        width={"25px"}
                      />
                    </div>

                    <h3>
                      We reduced 80% time-to-market of our Apps using{" "}
                      <span>Appwrite</span>.
                    </h3>
                  </div>
                  <div className={classes.TweetGeneral1Cover6}>
                    <div className={classes.TweetGeneral1}>
                      <div className={classes.TweetGeneral1Top}>
                        <img
                          src="https://appwrite.io/images/testimonials/ravisojitra.png"
                          alt="profile"
                        />
                        <div className={classes.TweetGeneral1User}>
                          <h4>Ravi Sojitra</h4>
                          <p>@ravisojitra</p>
                        </div>
                      </div>
                      <img
                        src="https://appwrite.io/images/testimonials/producthunt.svg"
                        alt="tweet"
                        width={"25px"}
                      />
                    </div>

                    <h3>
                      This is promising, have been using it since its stable
                      release. It's been great experience so far, never looked
                      back at firebase. Keep growing.
                    </h3>
                  </div>
                  <div className={classes.TweetGeneral1Cover5}>
                    <div className={classes.TweetGeneral1}>
                      <div className={classes.TweetGeneral1Top}>
                        <img
                          src="https://appwrite.io/images/testimonials/mentorwebdev.png"
                          alt="profile"
                        />
                        <div className={classes.TweetGeneral1User}>
                          <h4>WebDeveloperMentor</h4>
                          <p>@MentorWebDev</p>
                        </div>
                      </div>
                      <img
                        src="https://appwrite.io/images/testimonials/twitter.svg"
                        alt="tweet"
                        width={"25px"}
                      />
                    </div>

                    <h3>
                      <span>Appwrite</span> is an excellent platform. Best
                      choice if you want to self-host it.
                    </h3>
                  </div>
                </div>
              </div>

              <div className={classes.TweetGeneralFlex1}>
                <div className={classes.TweetTexts}>
                  <h1>JOIN THE COMMUNITY</h1>
                  <h3>
                    Join the thriving community of Appwrite developers today
                  </h3>
                </div>
                <div className={classes.TweetTextsOPen}>
                  <h1>Open Source Forever</h1>
                  <h3>
                    Appwrite is built by the open-source community of 500+
                    contributors
                  </h3>
                </div>
                <div className={classes.Socials}>
                  <Link to="https://github.com/appwrite/appwrite">
                    <div className={classes.git}>
                      <h2>
                        <FaGithub />
                      </h2>
                      <h3>Github</h3>
                    </div>
                  </Link>
                  <Link to="https://twitter.com/intent/user?screen_name=appwrite">
                    <div className={classes.twitter}>
                      <h2>
                        <FaTwitter />
                      </h2>
                      <h3>Twitter</h3>
                    </div>
                  </Link>
                  <Link to="https://appwrite.io/discord">
                    <div className={classes.discord}>
                      <h2>
                        <FaDiscord />
                      </h2>
                      <h3>Discord</h3>
                    </div>
                  </Link>
                  <Link to="https://www.linkedin.com/company/appwrite">
                    <div className={classes.lik}>
                      <h2>
                        <FaLinkedin />
                      </h2>
                      <h3>Linkedin</h3>
                    </div>
                  </Link>
                  <Link to="https://www.youtube.com/c/appwrite">
                    <div className={classes.youtube}>
                      <h2>
                        <FaYoutube />
                      </h2>
                      <h3>Youtube</h3>
                    </div>
                  </Link>
                </div>

                <div className={classes.join}>
                  <Link to="https://cloud.appwrite.io/">
                    <div className={classes.started}>Join The Space</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className={classes.tools}>
              <div className={classes.toolsText}>
                <h1>FLEXIBILITY</h1>
                <h2>
                  Integrate with the tools and technologies you already love
                </h2>
              </div>

              <div className={classes.slide}>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/web.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>

                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/flutter.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/android.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/nodejs.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/dark/apple.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/php.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/dark/deno.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/swift.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/kotlin.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/dart.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/ruby.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
                <div className={classes.sliderWrap}>
                  <div className={classes.slider}>
                    <img
                      src="https://appwrite.io/images-ee/platforms/python.svg"
                      className={classes.slideImage}
                      alt="HTML"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.footerGeneralCover}>
            <div className={classes.footerGeneral}>
              <div className={classes.appwriteSocials}>
                <img
                  src="https://appwrite.io/images-ee/footer-logo.svg"
                  alt="app"
                />
              </div>
              <div className={classes.footerGeneral1}>
                <div className={classes.products}>
                  <h1>Product</h1>
                  <h4>Docs</h4>
                  <h4>Self Hosting</h4>
                  <h4>web</h4>
                  <h4>Flutter</h4>
                  <h4>Apple</h4>
                  <h4>Android</h4>
                  <h4>Server</h4>
                </div>
                <div className={classes.Features}>
                  <h1>Features</h1>
                  <h4>Databases</h4>
                  <h4>Authentication</h4>
                  <h4>Storage</h4>
                  <h4>Function</h4>
                  <h4>Realtime</h4>
                </div>
                <div className={classes.About}>
                  <h1>Company</h1>
                  <h4>Blog</h4>
                  <h4>Community</h4>
                  <h4>Careers</h4>
                  <h4>Contact</h4>
                  <h4>Logos and assets</h4>
                  <h4>OSS Fund</h4>
                  <h4>Heroes</h4>
                  <h4>Store</h4>
                </div>
              </div>
            </div>
            <div className={classes.copyright}>
              <p>Copyright © 2023 Appwrite • Version 0.30.13.504</p>
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className={classes.copyrightArrow}
              >
                <h2>
                  <FaArrowUp />
                </h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile
          <Link to="/">
            <span className="bg-yellow-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </div>
  );
}

export default Profile;
