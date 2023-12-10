/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import '/css/bootstrap.min.css'
import '/css/bootstrap-icons.css'
import '/css/swiper.min.css'
import '/css/aos.css'
import '/css/daterangepicker.css'

const data = {
    title: "滿意度調查表",
    title_text: "親愛的先生、小姐您好:首先非常感謝您撥冗填答此問卷。我們希望聽到您的反饋，以便我們可以不斷改善內容和產品的品質。 請填寫此調查並讓我們知道您的想法。在此向您致上萬分的感謝。",
    content: {
        question: [{
            question_type: "1",
            question_name: "1.單行文字",
            question_order: 1,
            option: [{
                item_number: "0001",
                item_number2: "0001",
                value: ""
            }]
        }, {
            question_type: "2",
            question_name: "2.多行文字",
            question_order: 2,
            option: [{
                item_number: "0002",
                item_number2: "0001",
                value: ""
            }]
        }, {
            question_type: "3",
            question_name: "3.單選題",
            question_order: 3,
            option: [{
                item_number: "0003",
                item_number2: "0001",
                name: "第1次",
                value: ""
            }, {
                item_number: "0003",
                item_number2: "0002",
                name: "2-3次",
                value: ""
            }, {
                item_number: "0003",
                item_number2: "0003",
                name: "4-6次",
                value: ""
            }, {
                item_number: "0003",
                item_number2: "0004",
                name: "6次以上",
                value: ""
            }, {
                item_number: "0003",
                item_number2: "0005",
                name: "來過，但忘記次數",
                value: ""
            }]
        }, {
            question_type: "4",
            question_name: "4.複選題",
            question_order: 4,
            option: [{
                item_number: "0004",
                item_number2: "0001",
                name: "親友介紹",
                value: ""
            }, {
                item_number: "0004",
                item_number2: "0002",
                name: "宣傳傳單",
                value: ""
            }, {
                item_number: "0004",
                item_number2: "0003",
                name: "網路資訊",
                value: ""
            }, {
                item_number: "0004",
                item_number2: "0004",
                name: "經過看到",
                value: ""
            }, {
                item_number: "0004",
                item_number2: "0005",
                name: "其它管道",
                value: ""
            }]
        }, {
            question_type: "5",
            question_name: "5.矩陣題",
            question_order: 5,
            option: [{
                item_number: "0005",
                item_number2: "0001",
                item_number3: "0001",
                x_name: "不滿意",
                y_name: "整體",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0001",
                item_number3: "0002",
                x_name: "普通",
                y_name: "整體",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0001",
                item_number3: "0003",
                x_name: "滿意",
                y_name: "整體",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0002",
                item_number3: "0001",
                x_name: "不滿意",
                y_name: "環境",
                axis: "X",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0002",
                item_number3: "0002",
                x_name: "普通",
                y_name: "環境",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0002",
                item_number3: "0003",
                x_name: "滿意",
                y_name: "環境",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0003",
                item_number3: "0001",
                x_name: "不滿意",
                y_name: "服務",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0003",
                item_number3: "0002",
                x_name: "普通",
                y_name: "服務",
                value: ""
            }, {
                item_number: "0005",
                item_number2: "0003",
                item_number3: "0003",
                x_name: "滿意",
                y_name: "服務",
                value: ""
            }]
        }, {
            question_type: "6",
            question_name: "6.數字題",
            question_order: 6,
            option: [{
                item_number: "0010",
                item_number2: "0001",
                number_min: 10,
                number_max: 20,
                value: ""
            }]
        }, {
            question_type: "7",
            question_name: "7.數字滑桿",
            question_order: 7,
            option: [{
                item_number: "0011",
                item_number2: "0001",
                name: "0到10分，您的意願有多高呢？",
                number_min: 0,
                number_max: 10,
                number_step: 2,
                value: ""
            }]
        }, {
            question_type: "8",
            question_name: "8.日期",
            question_order: 8,
            option: [{
                item_number: "0012",
                item_number2: "0001",
                date_range_from: "2023-09-01T00:00:00",
                date_range_end: "2023-12-31T00:00:00",
                value: ""
            }]
        }, {
            question_type: "9",
            question_name: "9.分類標題",
            question_order: 9,
            option: [{
                item_number: "0013",
                item_number2: "0001",
                value: ""
            }]
        }, {
            question_type: "10",
            question_name: "10.分隔線",
            question_order: 10,
            option: [{
                item_number: "0014",
                item_number2: "0001",
                value: ""
            }]
        }]
    }
};

function Question(props) {
    const { type, name, order, setAnser, option } = props
    const handleOptionChange = (e) => {
        const name = e.target.id.split("_");
        const value = type == "3" || type == "4" || type == "5" ? e.target.checked : e.target.value;
        if (type == "7")
            $("#scoreOutput" + e.target.id).val(value);
        if (type == "5")
            setAnser(order, name[0], name[1], name[2], value)
        else
            setAnser(order, name[0], name[1], "", value)
    }
    const x_title = option.filter(o => o.item_number2 == "0001")
    const y_title = option.filter(o => o.item_number3 == "0001")
    switch (type) {
        case "1":
            //單行文字
            return (
                <div className="item">
                    <h3 className="title">{name}</h3>
                    {option.map((e, i) => {
                        return (
                            <input key={i} type="text" className="form-control" name={e.item_number + '_' + e.item_number2} id={e.item_number + '_' + e.item_number2} onBlur={handleOptionChange} />
                        )
                    })}
                </div>)
        case "2":
            //多行文字
            return (
                <div className="item">
                    <h3 className="title">{name}</h3>
                    {option.map((e, i) => {
                        return (
                            <textarea key={i} className="form-control" name={e.item_number + '_' + e.item_number2} id={e.item_number + '_' + e.item_number2} onBlur={handleOptionChange} rows="5" />
                        )
                    })}
                </div>)
        case "3":
            //單選題
            return (
                <div className="item">
                    <h3 className="title">{name}</h3>
                    <div className="form-check-group">
                        {option.map((e, i) => {
                            return (
                                <div key={i} className="form-check">
                                    <input className="form-check-input" type="radio" name={e.item_number} id={e.item_number + '_' + e.item_number2} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor={e.item_number + '_' + e.item_number2}>{e.name}</label></div>
                            )
                        })}
                    </div>
                </div>)
        case "4":
            //複選題
            return (
                <div className="item">
                    <h3 className="title">{name}<br></br><span>複選</span></h3>
                    <div className="form-check-group">
                        {option.map((e, i) => {
                            return (
                                <div key={i} className="form-check">
                                    <input className="form-check-input" type="checkbox" name={e.item_number} id={e.item_number + '_' + e.item_number2} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor={e.item_number + '_' + e.item_number2}>{e.name}</label></div>
                            )
                        })}
                    </div>
                </div>)
        case "5":
            //矩陣題
            return (
                <div className="item">
                    <h3 className="title">{name}</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                {x_title.map((e, i) => {
                                    return (
                                        <th key={i}>{e.x_name}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {y_title.map((e, i) => {
                                const x_row = option.filter(o => o.item_number2 == e.item_number2)
                                return (
                                    <tr key={i}>
                                        <th>{e.y_name}</th>
                                        {x_row.map((e2, i2) => (
                                            <td key={i2}>
                                                <input className="form-check-input" type="radio" name={e2.item_number + "_" + e2.item_number2} id={e2.item_number + "_" + e2.item_number2 + "_" + e2.item_number3} onChange={handleOptionChange} />
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                            <tr></tr>
                        </tbody>
                    </table>
                </div>)
        case "6":
            //數字題
            return (
                <div className="item">
                    <h3 className="title">{name}</h3>
                    <div className="form-check-group">
                        {option.map((e, i) => {
                            return (
                                <input key={i} type="number" className="form-control" name={e.item_number + '_' + e.item_number2} id={e.item_number + '_' + e.item_number2} min={e.number_min} max={e.number_max} onChange={handleOptionChange} />
                            )
                        })}
                    </div>
                </div>)
        case "7":
            //數字滑桿
            return (
                option.map((e, i) => {
                    return (
                        <div key={i} className="item">
                            <h3 className="title">{name}</h3>
                            <div className="form-range-group">
                                <label htmlFor={e.item_number + '_' + e.item_number2} className="form-label">{e.name}</label><br></br>
                                <output name={'scoreName' + e.item_number + '_' + e.item_number2} id={'scoreOutput' + e.item_number + '_' + e.item_number2}>{e.number_min}</output>
                                <input type="range" className="form-range" name={'scoreName' + e.item_number + '_' + e.item_number2} id={e.item_number + '_' + e.item_number2} min={e.number_min} max={e.number_max} step={e.number_step} onInput={handleOptionChange} />
                            </div>
                            <div className="number"><span>{e.number_min}</span><span>{e.number_max}</span></div>
                        </div>
                    )
                })
            )
        case "8":
            //日期
            return (<div className="item">
                <h3 className="title">{name}</h3>
                {option.map((e, i) => {
                    return (
                        <div key={i} className="dates">
                            <input type="text" className="form-control" name={e.item_number + '_' + e.item_number2} id={e.item_number + '_' + e.item_number2} onBlur={handleOptionChange} readOnly="readOnly" />
                        </div>
                    )
                })}
            </div>)
        case "9":
            //分類標題
            return (<div className="item">
                <h3 className="title">{name}</h3>
            </div>)
        case "10":
            //分隔線
            return (<div className="item">
                <hr />
            </div>)
        default:
            return null;
    }
}

export default function App() {
    const [ansers, setAnsers] = React.useState(data);
    const setAnser = (order, name1, name2, name3, value) => {
        setAnsers(prevState => {
            const newAnsers = { ...prevState };
            var option = newAnsers.content.question[order - 1].option.find(o => o.item_number === name1 && o.item_number2 === name2);
            if (name3 != "") {
                option = newAnsers.content.question[order - 1].option.find(o => o.item_number === name1 && o.item_number2 === name2 && o.item_number3 === name3);
            }
            if (option) {
                if (newAnsers.content.question[order - 1].question_type === "3") {
                    newAnsers.content.question[order - 1].option.forEach(e => e.value = "");
                }
                else if (newAnsers.content.question[order - 1].question_type === "5") {
                    newAnsers.content.question[order - 1].option.filter(o => o.item_number2 == name2).forEach(e => e.value = "");
                }
                option.value = value;
            }
            return newAnsers;
        })
    }
    const surveyComplete = (e) => {
        e.preventDefault()
        $("#show").html(JSON.stringify(ansers));
    };

    useEffect(() => {
        const question7 = data.content.question.filter(q => q.question_type == "7");
        const question8 = data.content.question.filter(q => q.question_type == "8");
        const timer = setTimeout(() => {
            question7.forEach(e => $("#" + e.option[0].item_number + '_' + e.option[0].item_number2).val(e.option[0].min));
            question8.forEach(e => SetDate(e.option[0].item_number + "_" + e.option[0].item_number2, e.option[0].date_range_from, e.option[0].date_range_end));
        }, 100);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div id="root" className="container">
            <div className="survey-title">
                <img className="logo" src={data.image} alt="" />
                <h2 className="title">{data.title}</h2>
                <p className="text">{data.title_text}</p>
            </div>
            <div className="survey-content">
                <form className="form" action="">
                    {data.content.question.map((e, i) => {
                        return (
                            <Question key={i} type={e.question_type} name={e.question_name} order={e.question_order} setAnser={setAnser} option={e.option} />
                        )
                    })}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={surveyComplete} >送出</button>
                    </div>
                </form>
                <div id="show"></div>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
