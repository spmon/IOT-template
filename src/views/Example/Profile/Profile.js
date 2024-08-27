import React from "react";
import './Profile.css';
import { motion } from 'framer-motion';
class Profile extends React.Component{

    render(){
        return(
            <div className="profile-container">
                <div className="left">
                    <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/278459014_509313137537982_2783581271605951803_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHIOS8L4oU5sCj_w1ZXc4vbaGImQH0vWWloYiZAfS9ZaVwpcSFI9fekfGlgAH0-LvGhKoWpkLDL4dMsMhHkopXS&_nc_ohc=bKlvFxmh2NAQ7kNvgEj7d_S&_nc_ht=scontent.fhan2-4.fna&oh=00_AYBiINRx4X6ca-ZmVfoI50KCe61Y2NqdOmlPeyQO0KyH_A&oe=66D10E9F"
                    alt="profile"
                    className="profile-image"></img>
                </div>
                <div className="right">
                    <div className="text1">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}  // Ban đầu ẩn và nằm dưới
                        animate={{ opacity: 1, y: 0 }}   // Sau đó hiện lên và trở về vị trí ban đầu
                        transition={{ duration: 1 }}     // Thời gian hiệu ứng
                        >
                    <p><strong>Full Name:</strong> Nguyễn Chí Minh</p>
                    <p><strong>Student ID:</strong> B21DCCN525</p>
                    <p><strong>Class:</strong> D21CQCN09-B</p>
                    <p><strong>Email:</strong> decade69125@gmail.com</p>
                    <p><strong>Github:</strong> https://github.com/spmon/IOT-template</p>
                    </motion.div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;
