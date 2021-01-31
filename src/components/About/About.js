import React from 'react';
import classes from './About.module.scss';
import Box from '../UI/Box/Box';
import Bullet from '../UI/Bullet/Bullet';
import List from '../UI/List/List';
import Link from '../UI/Link/Link';

const About = (props) => {
  return (
    <div id='About' className={classes.About}>
      <Box title='Education' containerClassName={classes.EducationExperience}>
        <div className={classes.item}>
          <div className={`RedBold ${classes.year}`}>2016 - 2019</div>
          <div>
            <div className='Bold'>Media Technology</div>
            <a
              href='https://www.kmutt.ac.th/'
              target='_blank'
              rel='noopener noreferrer'
            >
              King Mongkut's University of Technology Thonburi
            </a>
          </div>
          <div className={classes.bullet}>
            {[
              'Outstanding Academic Performance in the third year with GPAX 3.90',
              'Outstanding Academic Performance in the second year with GPAX 3.91',
              'Outstanding Academic Performance in the first year with GPAX 3.92',
              'Petchra Pra Jom Klao Scholarship',
            ].map((text) => (
              <Bullet key={text}>{text}</Bullet>
            ))}
          </div>
        </div>
        <div className={classes.item}>
          <div className={`RedBold ${classes.year}`}>2013 - 2015</div>
          <div>
            <div className='Bold'>Mathematics-Science Program</div>
            <a
              href='http://www.bcc.ac.th/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Bangkok Christian College
            </a>
          </div>
        </div>
      </Box>

      <Box title='Experience' containerClassName={classes.EducationExperience}>
        <div className={classes.item}>
          <div className={`RedBold ${classes.year}`}>Aug 2020 - Present</div>
          <div>
            <div className='Bold'>Junior Software Engineer</div>
            <a
              href='https://easysunday.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sunday
            </a>
          </div>
          <div className={classes.bullet}>
            {[
              'Main responsible for internal platform front-end',
              'Implemented websites, mobile application and landing pages front-end using React and NextJS',
              'Designed and developed front-end platform for underwriting insurance policies using React/Redux, Typescript, Antd and SCSS',
            ].map((text) => (
              <Bullet key={text}>{text}</Bullet>
            ))}
          </div>
          <List
            lists={['React/Redux', 'NextJS', 'Typescipt', 'NodeJS']}
            className={classes.List}
          />
        </div>

        <div className={classes.item}>
          <div className={`RedBold ${classes.year}`}>Jan - May 2020</div>
          <div>
            <div className='Bold'>Teaching Assistant</div>
            <a
              href='https://www.kmutt.ac.th/'
              target='_blank'
              rel='noopener noreferrer'
            >
              KMUTT
            </a>
          </div>
          <div className={classes.bullet}>
            <Bullet>
              Asisted and mentored students in web programming class
            </Bullet>
          </div>
          <List
            lists={['HTML', 'CSS', 'PHP', 'SQL']}
            className={classes.List}
          />
        </div>

        <div className={classes.item}>
          <div className={`RedBold ${classes.year}`}>Jun - Jul 2019</div>
          <div>
            <div className='Bold'>Developer Intern</div>
            <a
              href='https://www.boonmeelab.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Boonmee Lab
            </a>
          </div>
          <div className={classes.bullet}>
            {[
              'Implemented services for chatbot API using NodeJS and Dialogflow',
              'Built an interactive map and data visualization website using NuxtJS and Mapbox',
              'Created new front-end features on eCommerce website using Vue',
            ].map((text) => (
              <Bullet key={text}>{text}</Bullet>
            ))}
            <Bullet>
              <Link
                to='https://medium.com/@vachanachongrujipinyo/ประสบการณ์ฝึกงาน-เปลี่ยนชีวิต-ที่-boonmee-lab-70b568f95f8e'
                name='medium'
              />
            </Bullet>
          </div>
          <List
            lists={['NodeJS', 'Vue', 'Dialogflow']}
            className={classes.List}
          />
        </div>
      </Box>

      <Box title='Skills' containerClassName={classes.Skills}>
        <div>
          <div className='RedHightLight'>Programming</div>
          <div className={classes.TwoColumnFlex}>
            <div className='Bold'>Intermediate</div>
            <List comma lists={['React', 'NodeJS', 'ES6', 'SCSS']} />
          </div>
          <div className={classes.TwoColumnFlex}>
            <div className='Bold'>Beginner</div>
            <List
              comma
              lists={[
                'Redux',
                'NextJS',
                'Typescipt',
                'SQL',
                'PHP',
                'Vue',
                'Electron',
              ]}
            />
          </div>
        </div>
        <div>
          <div className='RedHightLight'>Other</div>
          <List
            comma
            lists={[
              'UX/UI Design',
              'Design Thinking',
              'Arduino',
              'Dialogflow',
              'Adobe Illustrator',
              'Adobe XD',
            ]}
          />
        </div>
      </Box>

      <div className={classes.TwoColumnGrid}>
        <Box title='Languages' className={classes.Languages}>
          <div>
            <div className='RedBold'>Thai</div>Native
          </div>
          <div>
            <div className='RedBold'>English</div>Intermediate
          </div>
        </Box>
        <Box title='Interests'>
          <List
            comma
            lists={[
              'Backend',
              'Mobile Application',
              'Chatbot',
              'Machine Learning',
            ]}
          />
        </Box>
      </div>
    </div>
  );
};

export default About;
