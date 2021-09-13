import React from 'react'
import './NotificationMenu.css'
import { format } from 'timeago.js';

const NotificationMenu = ({ notificationList }) => {

  const list = [
    {
      profilePicture: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
      firstname: "David",
      lastname: "Goggins",
      message: "Like your picture.",
      createdAt: new Date(2021, 0, 25, 8, 30)
    },
    {
      profilePicture: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
      firstname: "David",
      lastname: "Goggins",
      message: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.",
      createdAt: new Date('Sun Sep 12 2021 11:10:41 GMT+0200')
    }
  ]
  const NotificationItem = ({ notification }) => {
    return (
      <div className="notificationItem">
        <div className="notificationContent">
          <img /* src={imglink} */ src={notification.profilePicture} alt="" className="topbarImg" />
        </div>
        <div className="notificationItemMessage">
          <span className="notificationMessage" >{`${notification.firstname} ${notification.lastname} ${notification.message}`}</span>
          <br />
          <span className="notificationDate"> {format(notification.createdAt)} </span>
        </div>
      </div>
    )
  }
  return (
    <div className="notificationMenuContainer">
      {list.map((item, key) => {
        return <NotificationItem notification={item} key={key} />
      })}
    </div>
  )
}

export default NotificationMenu
