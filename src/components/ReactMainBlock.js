import './../index.css'
import ph1 from './../photo1.jpg'
import ph2 from './../photo2.jpg'
import ph3 from './../photo3.jpg'
import ph4 from './../photo4.jpg'

const ReactMainBlock = () => {
    return (
        <div className={`react-main-block`}>
            <h1>Супервизии онлайн <br/> <span>для помогающих профессий</span></h1>
            <p className={`react-main-block-subtitle`}>Поможем подобрать супервизора для психологов,<br/>психотерапевтов,
                коучей, профориентологов, логопедов</p>
            <div className={`react-main-block-link`}>Подобрать специалиста</div>
            <div className={`react-main-block-img img1`}>
                <div className={`react-main-block-img-container imgc1`}>
                    <img src={ph1} alt={`picture_desc`}/>
                    <div className={`react-main-block-cloud left`}>
                        Коллеги, у меня <br/>
                        сложный случай
                    </div>
                </div>
            </div>
            <div className={`react-main-block-img img2`}>
                <div className={`react-main-block-img-container imgc2`}>
                    <img src={ph2} alt={`picture_desc`}/>
                    <div className={`react-main-block-cloud left`}>
                        Хочу понять, как работать с семьей
                    </div>
                </div>
            </div>
            <div className={`react-main-block-img img3`}>
                <div className={`react-main-block-img-container imgc3`}>
                    <img src={ph3} alt={`picture_desc`}/>
                    <div className={`react-main-block-cloud left`}>
                        Я понимаю <br/>
                        запрос клиента
                    </div>
                </div>
            </div>
            <div className={`react-main-block-img img4`}>
                <div className={`react-main-block-img-container imgc4`}>
                    <img src={ph4} alt={`picture_desc`}/>
                    <div className={`react-main-block-cloud right`}>
                        Коллеги, у меня <br/>
                        сложный случай
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReactMainBlock