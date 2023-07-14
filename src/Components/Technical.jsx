import React from 'react';

const TechnicalSkills = () => {
  const skills = [
    {
      title: 'Langages de programmation',
      list: ['Python', 'Java', 'C', 'C++', 'JavaScript']
    },
    {
      title: 'Développement web',
      list: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'MySQL', 'MongoDB']
    },
    {
      title: 'Développement mobile',
      list: ['Android (Java, Kotlin)', 'iOS (Swift)']
    },
    {
      title: 'Bases de données',
      list: ['Conception et analyse de bases de données relationnelles ou non relationnelles', 'Maitrise du langage SQL']
    }
  ];

  return (
    <div className="container w-11/12 mx-auto mb-32 flex flex-wrap gap-4 justify-center">
     <h1 className='text-gradient font-semibold text-4xl' >Présentation</h1>
     <p className='font-normal text-xl w-11/12 ' >
     Je suis un étudiant passionné par la programmation informatique, et j'ai acquis des compétences solides dans plusieurs domaines clés du développement logiciel. J'ai une solide compréhension des principes de base de la programmation, ainsi que de l'analyse des problèmes et de la résolution des bugs. Je suis toujours prêt à relever de nouveaux défis et à apprendre de nouvelles technologies pour améliorer mes compétences.
     </p>
      {skills.map((skill, index) => (
        <div className="bg-white  rounded-xl p-4 shadow-xl max-w-xs" key={index}>
          <h3 className="text-xl text-gradient font-semibold mb-2">{skill.title}</h3>
          <ul>
            {skill.list.map((item, i) => (
              <li key={i} className="list-disc font-normal text-lg ml-4">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TechnicalSkills;
