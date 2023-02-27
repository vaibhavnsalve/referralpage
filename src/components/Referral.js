import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Referral.css";

const Referral = () => {
  const navigate = useNavigate();

  const onMenuContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="referral">
      <img className="bkg-icon" alt="" src="../bkg.svg" />
      <div className="referral-inner">
        <div className="icons8-medium-1-parent">
          <img className="icons8-medium-1" alt="" src="../icons8medium-1.svg" />
          <img
            className="icons8-medium-1"
            alt=""
            src="../icons8discord-1.svg"
          />
          <img className="twitter-1-icon" alt="" src="../twitter-1.svg" />
        </div>
      </div>
      <div className="referral-child">
        <div className="referral-section-parent">
          <div className="referral-section">
            <div className="refer-texts">
              <div className="refer-texts">
                <b className="refer-friends-earn-container">
                  <p className="refer-friends">
                    <span>{`Refer Friends. `}</span>
                  </p>
                  <p className="earn-mgp-together">
                    <span>{`Earn `}</span>
                    <span className="mgp">$MGP</span>
                    <span className="together"> Together.</span>
                  </p>
                </b>
                <div className="earn-up-to">
                  Earn up to 15% of the $MGP that your friends earn on Magpie.
                </div>
              </div>
              <div className="view-referral-rules-parent">
                <div className="view-referral-rules">View referral rules</div>
                <img
                  className="chevron-right-icon"
                  alt=""
                  src="../chevronright.svg"
                />
              </div>
            </div>
            <div className="referral1">
              <div className="frame-parent">
                <div className="frame-group">
                  <div className="tier-parent">
                    <button className="tier">
                      <div className="wombat-exchange-wrapper">
                        <div className="wombat-exchange">
                          <div className="token-logo">
                            <img
                              className="binance-usdollar-logo-1-icon"
                              alt=""
                              src="../binanceusdollarlogo-1@2x.png"
                            />
                          </div>
                          <div className="tier-1">Tier 1</div>
                          <img
                            className="chevron-down-icon"
                            alt=""
                            src="../chevrondown.svg"
                          />
                        </div>
                      </div>
                    </button>
                    <button className="boost">
                      <div className="zap-parent">
                        <img
                          className="chevron-right-icon"
                          alt=""
                          src="../zap.svg"
                        />
                        <i className="boost-5">Boost 5%</i>
                      </div>
                    </button>
                  </div>
                  <div className="upgrade-to-higher-tier-parent">
                    <div className="upgrade-to-higher">
                      Upgrade to higher tier
                    </div>
                    <img
                      className="chevron-right-icon"
                      alt=""
                      src="../chevronright1.svg"
                    />
                  </div>
                </div>
                <div className="receive">
                  <div className="receive-inner">
                    <div className="parent">
                      <div className="div">5%</div>
                      <div className="your-receive">Your Receive</div>
                    </div>
                  </div>
                  <div className="receive-inner">
                    <div className="parent">
                      <div className="div">0%</div>
                      <div className="friends-receive">Friends Receive</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-group">
                <div className="upgrade-to-higher">Referral Link</div>
                <div className="httpaccountsdhuywuyd">
                  http://accounts...dhuywuyd
                </div>
              </div>
              <div className="frame-group">
                <div className="upgrade-to-higher">Share on</div>
                <div className="social-media">
                  <img
                    className="twitter-2-icon"
                    alt=""
                    src="../twitter-2@2x.png"
                  />
                  <img
                    className="twitter-2-icon"
                    alt=""
                    src="../telegram-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-container">
            <div className="social-media">
              <div className="frame-wrapper">
                <div className="parent">
                  <div className="div">0.0%</div>
                  <div className="total-rewards-parent">
                    <div className="total-rewards">Total Rewards</div>
                    <img
                      className="info-circle-icon"
                      alt=""
                      src="../infocircle.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="parent">
                  <div className="div">0.0%</div>
                  <div className="total-rewards-parent">
                    <div className="total-rewards">Friends</div>
                    <img
                      className="info-circle-icon"
                      alt=""
                      src="../infocircle1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent1">
              <div className="icons8-medium-1-parent">
                <img
                  className="token-logo-icon"
                  alt=""
                  src="../token-logo.svg"
                />
                <div className="parent">
                  <div className="div">0 MGP</div>
                  <div className="your-receive">Your Rewards</div>
                </div>
              </div>
              <button className="claim-rewards-wrapper">
                <button className="claim-rewards">Claim Rewards</button>
              </button>
            </div>
          </div>
          <div className="liquidity-pool-parent">
            <div className="liquidity-pool">
              <b className="referrals">rEFERRALS</b>
              <img
                className="liquidity-pool-child"
                alt=""
                src="../vector-113.svg"
              />
            </div>
            <div className="frame-parent2">
              <div className="xejdo24092780-parent">
                <div className="xejdo24092780">0xejdo2409...2780</div>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
              </div>
              <div className="xejdo24092780-parent">
                <div className="xejdo24092780">0xejdo2409...2780</div>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
              </div>
              <div className="xejdo24092780-parent">
                <div className="xejdo24092780">0xejdo2409...2780</div>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
                <a
                  className="xejdo240927801"
                  href="http://accounts...dhuywuyd"
                  target="_blank"
                >
                  0xejdo2409...2780
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent3">
        <img className="frame-child" alt="" src="../frame-14020.svg" />
        <img className="frame-child" alt="" src="../frame-14021.svg" />
        <img className="frame-child" alt="" src="../frame-14022.svg" />
      </div>
      <img className="referral-item" alt="" src="../vector-110.svg" />
      <div className="top-menu">
        <div className="logo-1-parent">
          <img className="logo-1-icon" alt="" src="../logo-1.svg" />
          <div className="menu">
            <div className="menu1">
              <div className="div">Stake</div>
            </div>
            <div className="menu1">
              <div className="div">Claim</div>
            </div>
            <button className="menu3">
              <div className="lock">Lock</div>
            </button>
            <button className="menu3">
              <div className="lock">Docs</div>
            </button>
            <div className="menu-parent">
              <div className="menu5">
                <div className="div">Governance</div>
              </div>
              <img className="info-circle-icon" alt="" src="../caretdown.svg" />
            </div>
            <div className="menu6">
              <div className="div">Vote</div>
            </div>
            <div className="menu1">
              <div className="div">Bribe</div>
            </div>
            <div className="menu8" onClick={onMenuContainer5Click}>
              <div className="div">Referral</div>
            </div>
            <div className="icons8-medium-1-group">
              <img
                className="icons8-medium-11"
                alt=""
                src="../icons8medium-11.svg"
              />
              <img
                className="icons8-medium-11"
                alt=""
                src="../icons8discord-11.svg"
              />
              <img className="twitter-1-icon1" alt="" src="../twitter-11.svg" />
            </div>
            <div className="menu-inner">
              <button className="more-parent">
                <div className="more">More</div>
                <img
                  className="twitter-1-icon"
                  alt=""
                  src="../chevrondown1.svg"
                />
              </button>
            </div>
            <button className="group-parent">
              <img className="group-icon" alt="" src="../group-11921.svg" />
              <div className="audited">Audited</div>
            </button>
          </div>
        </div>
        <button className="en-parent">
          <div className="en">EN</div>
          <div className="crypto">
            <div className="magpie">
              <div className="px-token">
                <img
                  className="zhkpqxtr3oicrlj3dxl-b69i9xjfd6-icon"
                  alt=""
                  src="../8zhkpqxtr3oicrlj3dxl-b69i9xjfd6k10x6u-3@2x.png"
                />
                <div className="mgp2">
                  <div className="ellipse-parent">
                    <img
                      className="ellipse-parent"
                      alt=""
                      src="../ellipse-1.svg"
                    />
                    <img className="x-1-icon" alt="" src="../-42x-1@2x.png" />
                  </div>
                </div>
              </div>
              <div className="more">$0.0</div>
            </div>
            <div className="magpie">
              <div className="px-token">
                <img
                  className="zhkpqxtr3oicrlj3dxl-b69i9xjfd6-icon"
                  alt=""
                  src="../8zhkpqxtr3oicrlj3dxl-b69i9xjfd6k10x6u-3@2x.png"
                />
              </div>
              <div className="more">$0.0</div>
            </div>
          </div>
          <img className="globe-icon" alt="" src="../globe.svg" />
          <button className="connect-wallet">
            <button className="en-parent">
              <img className="chevron-down-icon" alt="" src="../wallet.svg" />
              <div className="connect-wallet1">0xFA42.......439de</div>
            </button>
            <img className="twitter-1-icon" alt="" src="../chevrondown2.svg" />
          </button>
          <img className="twitter-1-icon" alt="" src="../moon.svg" />
        </button>
      </div>
    </div>
  );
};

export default Referral;
