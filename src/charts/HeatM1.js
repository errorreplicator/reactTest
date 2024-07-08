import React from "react"
import { ResponsiveHeatMap } from "@nivo/heatmap"


const HeatM1 =() => {
    
    const heatData = [
        {
          "id": "Japan",
          "data": [
            {
              "x": "Train",
              "y": -30927
            },
            {
              "x": "Subway",
              "y": 3239
            },
            {
              "x": "Bus",
              "y": 74415
            },
            {
              "x": "Car",
              "y": 54346
            },
            {
              "x": "Boat",
              "y": 562
            },
            {
              "x": "Moto",
              "y": -55029
            },
            {
              "x": "Moped",
              "y": 54534
            },
            {
              "x": "Bicycle",
              "y": 67843
            },
            {
              "x": "Others",
              "y": -40853
            }
          ]
        },
        {
          "id": "France",
          "data": [
            {
              "x": "Train",
              "y": 79834
            },
            {
              "x": "Subway",
              "y": -14824
            },
            {
              "x": "Bus",
              "y": -25760
            },
            {
              "x": "Car",
              "y": -87579
            },
            {
              "x": "Boat",
              "y": 3800
            },
            {
              "x": "Moto",
              "y": -36534
            },
            {
              "x": "Moped",
              "y": 49457
            },
            {
              "x": "Bicycle",
              "y": 7540
            },
            {
              "x": "Others",
              "y": -22872
            }
          ]
        },
        {
          "id": "US",
          "data": [
            {
              "x": "Train",
              "y": -60849
            },
            {
              "x": "Subway",
              "y": 48155
            },
            {
              "x": "Bus",
              "y": 6892
            },
            {
              "x": "Car",
              "y": 40993
            },
            {
              "x": "Boat",
              "y": 7968
            },
            {
              "x": "Moto",
              "y": 78671
            },
            {
              "x": "Moped",
              "y": -55028
            },
            {
              "x": "Bicycle",
              "y": -62632
            },
            {
              "x": "Others",
              "y": -96594
            }
          ]
        },
        {
          "id": "Germany",
          "data": [
            {
              "x": "Train",
              "y": 55726
            },
            {
              "x": "Subway",
              "y": -4268
            },
            {
              "x": "Bus",
              "y": 34719
            },
            {
              "x": "Car",
              "y": 56498
            },
            {
              "x": "Boat",
              "y": -96176
            },
            {
              "x": "Moto",
              "y": 11977
            },
            {
              "x": "Moped",
              "y": 28643
            },
            {
              "x": "Bicycle",
              "y": 84519
            },
            {
              "x": "Others",
              "y": 7782
            }
          ]
        },
        {
          "id": "Norway",
          "data": [
            {
              "x": "Train",
              "y": -37638
            },
            {
              "x": "Subway",
              "y": -46686
            },
            {
              "x": "Bus",
              "y": 419
            },
            {
              "x": "Car",
              "y": -26438
            },
            {
              "x": "Boat",
              "y": 11280
            },
            {
              "x": "Moto",
              "y": 40088
            },
            {
              "x": "Moped",
              "y": 53482
            },
            {
              "x": "Bicycle",
              "y": -90986
            },
            {
              "x": "Others",
              "y": 90068
            }
          ]
        },
        {
          "id": "Iceland",
          "data": [
            {
              "x": "Train",
              "y": -41577
            },
            {
              "x": "Subway",
              "y": 42773
            },
            {
              "x": "Bus",
              "y": 22546
            },
            {
              "x": "Car",
              "y": -53584
            },
            {
              "x": "Boat",
              "y": -97457
            },
            {
              "x": "Moto",
              "y": 59547
            },
            {
              "x": "Moped",
              "y": 91039
            },
            {
              "x": "Bicycle",
              "y": 77123
            },
            {
              "x": "Others",
              "y": -89210
            }
          ]
        },
        {
          "id": "UK",
          "data": [
            {
              "x": "Train",
              "y": -99680
            },
            {
              "x": "Subway",
              "y": -30601
            },
            {
              "x": "Bus",
              "y": 81335
            },
            {
              "x": "Car",
              "y": 59897
            },
            {
              "x": "Boat",
              "y": -20025
            },
            {
              "x": "Moto",
              "y": -433
            },
            {
              "x": "Moped",
              "y": -57713
            },
            {
              "x": "Bicycle",
              "y": 12784
            },
            {
              "x": "Others",
              "y": -74503
            }
          ]
        },
        {
          "id": "Vietnam",
          "data": [
            {
              "x": "Train",
              "y": 69049
            },
            {
              "x": "Subway",
              "y": -20910
            },
            {
              "x": "Bus",
              "y": -48142
            },
            {
              "x": "Car",
              "y": -44273
            },
            {
              "x": "Boat",
              "y": 84702
            },
            {
              "x": "Moto",
              "y": -74188
            },
            {
              "x": "Moped",
              "y": 39541
            },
            {
              "x": "Bicycle",
              "y": 5383
            },
            {
              "x": "Others",
              "y": -9629
            }
          ]
        }
      ]
    
    
    return (

           <ResponsiveHeatMap 
                    data={heatData}
                    margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
                    valueFormat=">-.2s"
                    axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -90,
                        legend: '',
                        legendOffset: 46,
                        truncateTickAt: 0
                    }}
                    axisRight={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'country',
                        legendPosition: 'middle',
                        legendOffset: 70,
                        truncateTickAt: 0
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'country',
                        legendPosition: 'middle',
                        legendOffset: -72,
                        truncateTickAt: 0
                    }}
                    colors={{
                        type: 'diverging',
                        scheme: 'red_yellow_blue',
                        divergeAt: 0.5,
                        minValue: -100000,
                        maxValue: 100000
                    }}
                    emptyColor="#555555"
                    legends={[
                        {
                            anchor: 'bottom',
                            translateX: 0,
                            translateY: 30,
                            length: 400,
                            thickness: 8,
                            direction: 'row',
                            tickPosition: 'after',
                            tickSize: 3,
                            tickSpacing: 4,
                            tickOverlap: false,
                            tickFormat: '>-.2s',
                            title: 'Value →',
                            titleAlign: 'start',
                            titleOffset: 4
                        }
                    ]}
                />
      

    )
}

export default HeatM1