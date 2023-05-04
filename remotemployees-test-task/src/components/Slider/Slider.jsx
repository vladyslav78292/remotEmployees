import React, { useEffect, useState } from 'react';
import './Slider.scss';
import { buildings } from '../../api/BuildingsForSlider';
import line from '../../images/line.svg';
import classnames from 'classnames';
import { useWindowSize } from '../../utils/helper';

export const Slider = () => {
  const [position, setPosition] = useState(0);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [filteredBuildings, setFilteredBuildings] = useState(buildings)
  const windowWidth = useWindowSize().width;
  const movingCardSize = (windowWidth < 721) ? (340 * position) : (380 * position);
  const isFirst = position === 0;
  const isLast = position >= filteredBuildings.length - 3;
  const [isHouseButtonClicked, setIsHouseButtonClicked] = useState(false);
  const [isVillaButtonClicked, setIsVillaButtonClicked] = useState(false);
  const [isAraptmentsButtonClicked, setIsApartmentsButtonClicked] = useState(false);

  const handleFilterHouse = () => (
    setFilteredBuildings(buildings.filter(element => element.type === 'house')),
    setPosition(0),
    setIsHouseButtonClicked(!isHouseButtonClicked),
    setIsVillaButtonClicked(false),
    setIsApartmentsButtonClicked(false)
  );

  const handleFilterVillas = () => (
    setFilteredBuildings(buildings.filter(element => element.type === 'villa')),
    setPosition(0),
    setIsVillaButtonClicked(!isVillaButtonClicked),
    setIsHouseButtonClicked(false),
    setIsApartmentsButtonClicked(false)
  );

  const handleFilterApartments = () => (
    setFilteredBuildings(buildings.filter(element => element.type === 'apartments')),
    setPosition(0),
    setIsApartmentsButtonClicked(!isAraptmentsButtonClicked),
    setIsHouseButtonClicked(false),
    setIsVillaButtonClicked(false)
  );

  useEffect(() => {
    if (isLast) {
      setIsRightButtonDisabled(true);
    } else {
      setIsRightButtonDisabled(false);
    }

    if (isFirst) {
      setIsLeftButtonDisabled(true);
    } else {
      setIsLeftButtonDisabled(false);
    }
  }, [isLast, isFirst])

  useEffect(() => {
    if ( !isAraptmentsButtonClicked && !isHouseButtonClicked && !isVillaButtonClicked ) {
      setFilteredBuildings(buildings);
    }
  }, [isVillaButtonClicked, isAraptmentsButtonClicked, isHouseButtonClicked])

  return (
    <section className="slider grid">
      <span className='slider__container grid__item--desktop-5-33 grid__item--mobile-1-12 grid__item--tablet-2-11'>
        <span className="slider__head ">
          <span className='slider__head-title__container'>
            <span className='slider__head-title--first-part'>
              <img className='slider__head-title--first-part-image' alt='line' src={line} />
              <p className='slider__head-title--first-part-text'>Our Recommendation</p>
            </span>
            <h2 className="slider__head-title">Featured House</h2>
          </span>
          <span className='slider__filter-buttons'>
            <button
              onClick={() => handleFilterHouse()}
              className={classnames("slider__filter-button", {
                'isActive': isHouseButtonClicked
              }
              )}>
              {isHouseButtonClicked ? (
                <svg className='slider__filter-icon' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8.83189V17.5C17.9998 17.7719 17.9262 18.0386 17.7868 18.272C17.6475 18.5054 17.4476 18.6968 17.2084 18.8259C16.9916 18.9432 16.7485 19.0031 16.5021 18.9999H11.9967C11.7978 18.9999 11.607 18.9209 11.4664 18.7803C11.3257 18.6396 11.2467 18.4488 11.2467 18.2499V13.7493C11.2467 13.5504 11.1677 13.3596 11.0271 13.2189C10.8864 13.0783 10.6956 12.9993 10.4967 12.9993H7.49673C7.29781 12.9993 7.10705 13.0783 6.9664 13.2189C6.82574 13.3596 6.74673 13.5504 6.74673 13.7493V18.2499C6.74673 18.4488 6.66771 18.6396 6.52706 18.7803C6.3864 18.9209 6.19564 18.9999 5.99673 18.9999H1.5002C1.28754 19.0005 1.07723 18.9556 0.883354 18.8682C0.689475 18.7808 0.516507 18.653 0.37604 18.4934C0.12946 18.2082 -0.00428751 17.8427 8.829e-06 17.4657V8.8318C0.000172265 8.62281 0.0439196 8.41615 0.128457 8.22503C0.212994 8.0339 0.336463 7.86251 0.490978 7.7218L7.99032 0.903078C8.26579 0.650753 8.62579 0.510777 8.99936 0.510742C9.37293 0.510707 9.73296 0.650617 10.0085 0.90289L17.5091 7.72189C17.6636 7.86263 17.787 8.03403 17.8716 8.22515C17.9561 8.41627 17.9998 8.62292 18 8.83189Z" fill="#10B981"/>
                </svg>
              ) : (
                <svg className='slider__filter-icon' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8.83189V17.5C17.9998 17.7719 17.9262 18.0386 17.7868 18.272C17.6475 18.5054 17.4476 18.6968 17.2084 18.8259C16.9916 18.9432 16.7485 19.0031 16.5021 18.9999H11.9967C11.7978 18.9999 11.607 18.9209 11.4664 18.7803C11.3257 18.6396 11.2467 18.4488 11.2467 18.2499V13.7493C11.2467 13.5504 11.1677 13.3596 11.0271 13.2189C10.8864 13.0783 10.6956 12.9993 10.4967 12.9993H7.49673C7.29781 12.9993 7.10705 13.0783 6.9664 13.2189C6.82574 13.3596 6.74673 13.5504 6.74673 13.7493V18.2499C6.74673 18.4488 6.66771 18.6396 6.52706 18.7803C6.3864 18.9209 6.19564 18.9999 5.99673 18.9999H1.5002C1.28754 19.0005 1.07723 18.9556 0.883354 18.8682C0.689475 18.7808 0.516507 18.653 0.37604 18.4934C0.12946 18.2082 -0.00428751 17.8427 8.829e-06 17.4657V8.8318C0.000172265 8.62281 0.0439196 8.41615 0.128457 8.22503C0.212994 8.0339 0.336463 7.86251 0.490978 7.7218L7.99032 0.903078C8.26579 0.650753 8.62579 0.510777 8.99936 0.510742C9.37293 0.510707 9.73296 0.650617 10.0085 0.90289L17.5091 7.72189C17.6636 7.86263 17.787 8.03403 17.8716 8.22515C17.9561 8.41627 17.9998 8.62292 18 8.83189Z" fill="#888B97"/>
                </svg>
              )}
              House
            </button>
            <button
              className={classnames("slider__filter-button", {'isActive': isVillaButtonClicked })}
              onClick={() => handleFilterVillas()}
            >
            {isVillaButtonClicked ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18.0001H1C0.45 18.0001 0 17.5501 0 17.0001V5.69006C0 5.27006 0.25 4.90006 0.64 4.75006L11.64 0.52006C11.7921 0.461382 11.9561 0.440759 12.118 0.459986C12.2798 0.479212 12.4345 0.537706 12.5686 0.630376C12.7027 0.723045 12.8121 0.847081 12.8873 0.991686C12.9624 1.13629 13.0012 1.29708 13 1.46006V7.00006H5C4.45 7.00006 4 7.45006 4 8.00006V18.0001ZM14 9.00006H7C6.45 9.00006 6 9.45006 6 10.0001V17.0001C6 17.5501 6.45 18.0001 7 18.0001H11V14.0001C11 13.4501 11.45 13.0001 12 13.0001C12.55 13.0001 13 13.4501 13 14.0001V18.0001H17C17.55 18.0001 18 17.5501 18 17.0001V9.00006C18 7.90006 17.1 7.00006 16 7.00006C14.9 7.00006 14 7.90006 14 9.00006Z" fill="#10B981" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18.0001H1C0.45 18.0001 0 17.5501 0 17.0001V5.69006C0 5.27006 0.25 4.90006 0.64 4.75006L11.64 0.52006C11.7921 0.461382 11.9561 0.440759 12.118 0.459986C12.2798 0.479212 12.4345 0.537706 12.5686 0.630376C12.7027 0.723045 12.8121 0.847081 12.8873 0.991686C12.9624 1.13629 13.0012 1.29708 13 1.46006V7.00006H5C4.45 7.00006 4 7.45006 4 8.00006V18.0001ZM14 9.00006H7C6.45 9.00006 6 9.45006 6 10.0001V17.0001C6 17.5501 6.45 18.0001 7 18.0001H11V14.0001C11 13.4501 11.45 13.0001 12 13.0001C12.55 13.0001 13 13.4501 13 14.0001V18.0001H17C17.55 18.0001 18 17.5501 18 17.0001V9.00006C18 7.90006 17.1 7.00006 16 7.00006C14.9 7.00006 14 7.90006 14 9.00006Z" fill="#888B97" />
              </svg>
            )}
              Villa
            </button>
            <button
              className={classnames("slider__filter-button", {'isActive': isAraptmentsButtonClicked })}
              onClick={() => handleFilterApartments()}
            >
            {isAraptmentsButtonClicked ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8V2C14 0.9 13.1 0 12 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V16C0 17.1 0.9 18 2 18H8V14H10V18H16C17.1 18 18 17.1 18 16V10C18 8.9 17.1 8 16 8H14ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM12 12H10V10H12V12ZM12 8H10V6H12V8ZM12 4H10V2H12V4ZM16 16H14V14H16V16ZM16 12H14V10H16V12Z" fill="#10B981"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8V2C14 0.9 13.1 0 12 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V16C0 17.1 0.9 18 2 18H8V14H10V18H16C17.1 18 18 17.1 18 16V10C18 8.9 17.1 8 16 8H14ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM12 12H10V10H12V12ZM12 8H10V6H12V8ZM12 4H10V2H12V4ZM16 16H14V14H16V16ZM16 12H14V10H16V12Z" fill="#888B97"/>
              </svg>
            )}
              Apartment
            </button>
          </span>
          <div className="slider__buttons">
            <button
              className="slider__button slider__button-image--left"
              onClick={() => {
                setPosition((curr) => curr - 1);
              }}
              disabled={isFirst}
            >
              <p className='slider__button-image'>
              {isLeftButtonDisabled ? (
                  <svg width="8" height="16" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50775 17.1646C7.77805 17.1651 8.04001 17.0704 8.24815 16.8969C8.36529 16.7991 8.46212 16.6791 8.5331 16.5437C8.60407 16.4082 8.6478 16.2601 8.66177 16.1076C8.67574 15.9551 8.65968 15.8014 8.61451 15.6552C8.56934 15.5089 8.49595 15.3731 8.39854 15.2555L3.21574 9.01601L8.21344 2.76487C8.30954 2.6458 8.3813 2.50879 8.4246 2.36172C8.46791 2.21465 8.4819 2.06042 8.46577 1.90789C8.44965 1.75536 8.40372 1.60754 8.33064 1.47293C8.25755 1.33832 8.15875 1.21957 8.03991 1.12351C7.92021 1.01753 7.78004 0.937598 7.62818 0.88872C7.47633 0.839841 7.31607 0.823074 7.15747 0.83947C6.99887 0.855866 6.84535 0.905071 6.70655 0.983998C6.56774 1.06293 6.44665 1.16987 6.35087 1.29812L0.763163 8.28263C0.593008 8.49093 0.499989 8.7522 0.499989 9.02183C0.499989 9.29146 0.593008 9.55273 0.763163 9.76102L6.54754 16.7455C6.66359 16.8864 6.81102 16.9978 6.97785 17.0706C7.14468 17.1434 7.32622 17.1756 7.50775 17.1646Z" fill="#3C4563"/>
                  </svg>
                ) : (
                  <svg width="8" height="16" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50775 17.1646C7.77805 17.1651 8.04001 17.0704 8.24815 16.8969C8.36529 16.7991 8.46212 16.6791 8.5331 16.5437C8.60407 16.4082 8.6478 16.2601 8.66177 16.1076C8.67574 15.9551 8.65968 15.8014 8.61451 15.6552C8.56934 15.5089 8.49595 15.3731 8.39854 15.2555L3.21574 9.01601L8.21344 2.76487C8.30954 2.6458 8.3813 2.50879 8.4246 2.36172C8.46791 2.21465 8.4819 2.06042 8.46577 1.90789C8.44965 1.75536 8.40372 1.60754 8.33064 1.47293C8.25755 1.33832 8.15875 1.21957 8.03991 1.12351C7.92021 1.01753 7.78004 0.937598 7.62818 0.88872C7.47633 0.839841 7.31607 0.823074 7.15747 0.83947C6.99887 0.855866 6.84535 0.905071 6.70655 0.983998C6.56774 1.06293 6.44665 1.16987 6.35087 1.29812L0.763163 8.28263C0.593008 8.49093 0.499989 8.7522 0.499989 9.02183C0.499989 9.29146 0.593008 9.55273 0.763163 9.76102L6.54754 16.7455C6.66359 16.8864 6.81102 16.9978 6.97785 17.0706C7.14468 17.1434 7.32622 17.1756 7.50775 17.1646Z" fill="white"/>
                  </svg>
                )}
              </p>
            </button>
            <button
              className="slider__button slider__button-image--right"
              onClick={() => {
                setPosition((curr) => curr + 1);
              }}
              disabled={isLast}
            >
              <p className='slider__button-image'>
                {isRightButtonDisabled ? (
                  <svg width="8" height="16" viewBox="0 0 9 18" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path id='button' d="M1.65891 0.835396C1.3886 0.834864 1.12665 0.929592 0.918511 1.10313C0.801367 1.20086 0.704535 1.32088 0.633558 1.45632C0.562582 1.59175 0.518856 1.73995 0.504886 1.89242C0.490916 2.04488 0.506975 2.19863 0.552145 2.34484C0.597315 2.49106 0.670706 2.62687 0.768117 2.74449L5.95092 8.98399L0.953218 15.2351C0.857121 15.3542 0.785358 15.4912 0.742054 15.6383C0.69875 15.7854 0.684759 15.9396 0.700885 16.0921C0.717011 16.2446 0.762935 16.3925 0.83602 16.5271C0.909104 16.6617 1.00791 16.7804 1.12675 16.8765C1.24645 16.9825 1.38662 17.0624 1.53847 17.1113C1.69033 17.1602 1.85058 17.1769 2.00918 17.1605C2.16778 17.1441 2.3213 17.0949 2.46011 17.016C2.59891 16.9371 2.72 16.8301 2.81579 16.7019L8.40349 9.71737C8.57365 9.50907 8.66667 9.2478 8.66667 8.97817C8.66667 8.70854 8.57365 8.44727 8.40349 8.23898L2.61912 1.25447C2.50306 1.11359 2.35564 1.00223 2.18881 0.929419C2.02197 0.856607 1.84043 0.824394 1.65891 0.835396Z" fill="#3C4563"/>
                  </svg>
                ) : (
                  <svg width="8" height="16" viewBox="0 0 9 18" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path id='button' d="M1.65891 0.835396C1.3886 0.834864 1.12665 0.929592 0.918511 1.10313C0.801367 1.20086 0.704535 1.32088 0.633558 1.45632C0.562582 1.59175 0.518856 1.73995 0.504886 1.89242C0.490916 2.04488 0.506975 2.19863 0.552145 2.34484C0.597315 2.49106 0.670706 2.62687 0.768117 2.74449L5.95092 8.98399L0.953218 15.2351C0.857121 15.3542 0.785358 15.4912 0.742054 15.6383C0.69875 15.7854 0.684759 15.9396 0.700885 16.0921C0.717011 16.2446 0.762935 16.3925 0.83602 16.5271C0.909104 16.6617 1.00791 16.7804 1.12675 16.8765C1.24645 16.9825 1.38662 17.0624 1.53847 17.1113C1.69033 17.1602 1.85058 17.1769 2.00918 17.1605C2.16778 17.1441 2.3213 17.0949 2.46011 17.016C2.59891 16.9371 2.72 16.8301 2.81579 16.7019L8.40349 9.71737C8.57365 9.50907 8.66667 9.2478 8.66667 8.97817C8.66667 8.70854 8.57365 8.44727 8.40349 8.23898L2.61912 1.25447C2.50306 1.11359 2.35564 1.00223 2.18881 0.929419C2.02197 0.856607 1.84043 0.824394 1.65891 0.835396Z" fill="white"/>
                  </svg>
                )}
              </p>
            </button>
          </div>
        </span>
      </span>
      <div className="slider__cards grid__item--desktop-5-36  grid__item--mobile-2-12 grid__item--tablet-2-12">
          {filteredBuildings.map((building) => {
            return (
              <div
                key={building.image}
                className="slider__card"
                style={{ transform: `translateX(-${movingCardSize}px)` }}
              >
                <img
                  className='slider__image'
                  src={building.image}
                  alt='silde'
                />
                <h3 className='slider__card-title'>{building.title}</h3>
                <p className='slider__card-price'>{building.price}</p>
                <span className='slider__card-info'>
                  <img className='slider__card-owner' alt='owner' src={building.owner}/>
                  <p 
                    className='slider__modal'
                    style={{
                    backgroundColor: `${building.modal_background_c}`,
                    color: `${building.moda_text_c}`,
                  }}>
                    <img className='slider__modal-image' src={building.modal_image} alt='fire'/>{building.modal_text}</p>
                  <span className='slider__owner-info'>
                    <p className='slider__owner-name'>{building.owner_name}</p>
                    <p className='slider__owner-location'>{building.owner_location}</p>
                  </span>
                </span>
              </div>
            );
          })}
        </div>
    </section>
  );
};