"use client"
import Image from 'next/image'
import styles from './page.module.css'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Button = styled.button`
background: ${props => props.clr ? props.clr : "white"};
color: ${props => props.clr ? "white" : "#BF4F74"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border-radius: 3px;
`;
export default function Home() {
  const clr="blue"
  return (
    <div>
       <h1 style={{color:'red'}}>Hellow Sachin</h1>
       <h1 style={{color:clr}}>Hellow Sachin</h1>
       <h2 className='cy'>Hellow Sachin</h2>
       <h3 className={styles.cb}>Hellow Sachin</h3>
       <Title>Hellow Sachin</Title>
        <Button>Normal</Button>
        <Button clr="red">Primary</Button>
      <h5 className='cg'>Hellow Sachin</h5>
       <p>
           <span>Sachin</span>
           <b>Kohli</b>
           <i>Dhoni</i>
       </p>
     </div>
  )
}
