// "use client"
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { motion } from 'framer-motion';



// export default function SideBar() {
//     const MenuList = [
//         {
//           title:"Home",
//           icon: <i className="fa fa-home" style={iconStyle}></i>
//         },
//         {
//           title:"Contact",
//           icon: <i className="fa fa-envelope" style={iconStyle}></i>
//         },
//         {
//           title: "Contact Us",
//           icon: <i className="fa fa-info-circle" style={iconStyle}>
            
//           </i>
//         },
//         {
//           title:"Settings",
//           icon: <i className="fa fa-cog" style={iconStyle}></i>
//         },
//         {
//           title:"RateUs",
//           icon: <i className="fa fa-star" style={iconStyle}></i>
//         },
//         {
//           title:"Change Password",
//           icon: <i className="fa fa-eye" style={iconStyle}></i>
//         },
//         {
//           title:"Settings",
//           icon: <i className="fa fa-cog" style={iconStyle}></i>
//         }
//       ]
//   return (
//     <>
//     {
//           MenuList.map((list,i)=> <motion.div key={i}
//             transition={{ type: 'spring', damping: 22, mass: 0.99 }}
//             initial={{ opacity: 0, x: -2000 * (i+1)}} animate={{ opacity: 1, x: 0 }}>
            
//               <ul style={listStyle}>
//                 {
//                   <motion.li style={listItemStyle} whileHover={{ scale: 1.1 }}>
//                   <motion.span  transition={{ type: 'spring', damping: 30, mass: 0.99 }}
//             initial={{ opacity: 0, x: -10000 * (i+1) }} animate={{ opacity: 1, x: 0 }}  style={{color:'#000',textDecoration:'none',fontSize:"14px",fontWeight:'600',marginLeft:'10px',lineHeight:2}} >
//                      {list.icon}{list.title}
//                   </motion.span>
//                 </motion.li>
//                 }
              
//               </ul>
//             </motion.div>)
        
//     }
//     </>
//   )
// }


// const sidebarStyle = {
//     width: '250px',
//     height: '100vh',
//     backgroundColor: '#333',
//     color: '#fff',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     padding: '1rem',
//   };
  
  
//   const listStyle = {
//     listStyleType: 'none',
//     padding: 0,
//     minWidth:'200px'
//   };
  
//   const listItemStyle = {
//     marginBottom: '1rem',
//     fontSize: '1.2rem',
//     padding:'10px',
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//     cursor:'pointer',
//     borderRadius:'10px'
  
//   };
  
//   const iconStyle = {
//     marginRight: '0.5rem',
//   };
"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

export default function SideBar() {
    const MenuList = [
        {
            title: "Home",
            icon: <i className="fa fa-home" style={iconStyle}></i>,
            link: "#", // You can update this later
        },
        {
            title: "Contact",
            icon: <i className="fa fa-envelope" style={iconStyle}></i>,
            link: "https://ariyancreates.netlify.app/contact", // Portfolio link
        },
       
        {
            title: "My Projects",
            icon: <i className="fa fa-cog" style={iconStyle}></i>,
            link: "https://ariyancreates.netlify.app/about", // You can update this later
        },
        {
          title: "GitHub",
          icon: <i className="fab fa-github" style={iconStyle}></i>, // GitHub icon
          link: "https://github.com/Ariyanmahammad", // Replace with your GitHub profile link
      },
      {
          title: "LinkedIn",
          icon: <i className="fab fa-linkedin" style={iconStyle}></i>, // LinkedIn icon
          link: "https://www.linkedin.com/in/ariyan-mahammad-0907541b5/", // Replace with your LinkedIn profile link
      },
    ];

    return (
        <div >
            {
                MenuList.map((list, i) => 
                    <motion.div key={i}
                        transition={{ type: 'spring', damping: 22, mass: 0.99 }}
                        initial={{ opacity: 0, x: -2000 * (i + 1) }} 
                        animate={{ opacity: 1, x: 0 }}>
                        
                        <ul style={listStyle}>
                            <motion.li 
                                style={listItemStyle} 
                                whileHover={{ scale: 1.1 }}
                                onClick={() => list.link !== "#" && window.open(list.link, "_blank")} // Open link in new tab
                            >
                                <motion.span 
                                    transition={{ type: 'spring', damping: 30, mass: 0.99 }}
                                    initial={{ opacity: 0, x: -10000 * (i + 1) }} 
                                    animate={{ opacity: 1, x: 0 }}  
                                    style={{ color: '#000', textDecoration: 'none', fontSize: "14px", fontWeight: '600', marginLeft: '10px', lineHeight: 2 }}>
                                    {list.icon}{list.title}
                                </motion.span>
                            </motion.li>
                        </ul>
                    </motion.div>
                )
            }
        </div>
    )
}

const sidebarStyle = {
    width: '250px',
    height: '100vh',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '1rem',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
    minWidth: '200px'
};

const listItemStyle = {
    marginBottom: '1rem',
    fontSize: '1.2rem',
    padding: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    borderRadius: '10px'
};

const iconStyle = {
    marginRight: '0.5rem',
};
