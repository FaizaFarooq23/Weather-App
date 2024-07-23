import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
export default function ForecastWeather({ data }) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayInAWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayInAWeek, weekDays.length).concat(weekDays.slice(0, dayInAWeek))
    return (
        <>
            <div className='my-4 ml-2 '>
                <span className=' text-xl font-semibold '>Weather forecast for the next 7 days </span>
                </div>
            <Accordion allowZeroExpanded>

                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='forecast rounded-[10px] flex items-center cursor-pointer my-2 py-0.5 pl-3 pr-6 h-12 ' >
                                    <div className='flex justify-center items-center'>
                                        <img className='w-10 inline-block ml-0.5' alt='weather-icon' src={`icons/static/${item.weather[0].icon}.svg`} />
                                        <span className='font-semibold'>{forecastDays[idx]}</span>
                                    </div>
                                    <div className='flex items-center w-full justify-end '>
                                        <span
                                            className='float-right '>{item.weather[0].description}</span>
                                        <span className='mx-2 text-[#686868]'>{Math.round(item.main.temp)}°C</span>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div>
                                <div className='flex justify-between px-4'>

                                    <div>
                                        <p >Feels Like</p>
                                        <p className=' font-semibold'>{Math.round(item.main.feels_like)}°C</p>
                                    </div>
                                    <div>
                                        <p >Clouds</p>
                                        <p className=' font-semibold'>{Math.round(item.clouds.all)} %</p>
                                    </div>
                                    <div>
                                        <p>Wind Speed</p>
                                        <p className=' font-semibold'>{item.wind.speed} m/s</p>
                                    </div>
                                    <div>
                                        <p >Sea Level</p>
                                        <p className=' font-semibold'>{item.main.sea_level}m</p>
                                    </div>
                                    <div>
                                        <p>Humidity</p>
                                        <p className=' font-semibold'>{item.main.humidity}%</p>
                                    </div>
                                    <div><p>Pressure</p>
                                        <p className=' font-semibold'>{item.main.pressure} hPa</p> </div>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}

            </Accordion>
        </>
    )
}
