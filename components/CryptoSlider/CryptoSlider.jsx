import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Card from './Card';

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        }
    ]
};

function CryptoSlider() {
    const [TrendingCoins, setTrendingCoins] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '20',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '63d1a30448mshc001c3783742c16p13550cjsnd5025314b78f',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    const GetHistoricCoinData = () => {

        // fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
        //     .then(response => response.json()).then(data => {
        //         console.log(data);
        //         setTrendingCoins(data);
        //     }).catch(err => {
        //         console.log({ 'error returned => ': err });
        //     })
        // axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h', {
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         "Access-Control-Allow-Origin": "*",
        //         mode: 'no-cors',
        //     }
        // }).then((res) => {
        //     console.log(res.data);
        //     setTrendingCoins(res.data);
        // }).catch((error) => {
        //     console.log(error)
        // })
    }


    const RequestCryptoDetails = () => {
        axios.request(options).then(function (response) {
            console.log(response.data.data.coins);
            setTrendingCoins(response.data.data.coins);
        }).catch(function (error) {
            console.error(" error coinRanking" + error);
        });
    }

    useEffect(() => {
        RequestCryptoDetails();
        // GetHistoricCoinData();
        const interval = setInterval(() => {
            // GetHistoricCoinData();
            RequestCryptoDetails();
        }, 5000);
        return () => clearInterval(interval);
    }, [])


    const slider = useRef();
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    return (
        <>
            <Box sx={{
                position: 'relative', overflow: 'hidden', mt: {
                    md: '-94px',
                    xs: '-5px'
                }
            }} >
                <Box>
                    <Slider className='Slider' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ref={c => (slider.current = c)} {...settings}>
                        {
                            TrendingCoins.map((coin, index) => {
                                return <Box key={index} >
                                    {/* <Card name={coin.name} profit={coin.price_change_percentage_24h} USDprice={coin.price} Vol={coin.total_volume} symbol={coin.symbol} /> */}
                                    <Card name={coin.name} profit={coin.change} USDprice={coin.price} Vol={coin.marketCap} symbol={coin.symbol} />
                                </Box>
                            })
                        }
                    </Slider>
                </Box>
                <ArrowBackIosNewIcon onClick={() => previous()} sx={{
                    transition: ' all 0.5s ease', fontSize: '20px', color: 'white', cursor: 'pointer', position: 'absolute', top: '42%', left: {
                        md: '20px',
                        xs: '30px'
                    }, "&:hover": {
                        transform: 'scale(1.2)'
                    }
                }} />
                <ArrowForwardIosIcon onClick={() => next()} sx={{
                    transition: ' all 0.5s ease', fontSize: '20px', color: 'white', cursor: 'pointer', position: 'absolute', top: '42%', right: {
                        md: '20px',
                        xs: '30px'
                    }, "&:hover": {
                        transform: 'scale(1.2)'
                    }
                }} />
            </Box>
        </>
    )
}

export default CryptoSlider