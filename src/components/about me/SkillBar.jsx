import React from 'react'
import SkillBarImport from 'react-skillbars'

const SkillBar = () => {
    const skills = [
        { type: 'HTML', level: 99 },
        { type: 'CSS', level: 97 },
        { type: 'WordPress', level: 94 },
        { type: 'PHP', level: 85 },
        { type: 'JavaScript', level: 80 },
        { type: 'PhotoShop', level: 85 },
      ];
    const colors = {
        bar: 'black',
        title: {
          text: '#fff',
          background: 'black',
        },
      };
      
  return (
    <SkillBarImport skills={skills} colors={colors} height={'8vh'}/>
  )
}

export default SkillBar