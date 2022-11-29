import React, { useState} from 'react'
import './contact.css';
import { Text, StyleSheet } from 'react-native';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/eb1292f0-7024-11ed-a377-655c67143ceccd D"; 

// const Contact = () => {
//   return (
//     <div >
//       <p className="test">Test</p>
//     </div>
//   )
// }

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const styles = StyleSheet.create ({
    innerText: {
      color: 'grey',
      fontSize: 15,
      textAlign: 'left'
    },
    titleText: {
      color: 'white',
      fontSize: 30
      
    
    }
  })

  if (submitted) {
    return (
      <>
      <div className="finished">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
        </div>
      </>
    );
  }

  return (
    <div className="format">
            <div className="textBorder">

      <Text style={styles.titleText}>
Applications
      </Text>
      <br></br>
      <div className="innerText">
      <Text style={styles.innerText}>
        Please fill out the form below if you would like to join UBC Onyx! 
        Note that only UBC-V/UBC-O currently on a study or work term will be considered. 
        If you would like to apply to be a coach and/or manager, please let us know in the 'Peak Rank' text box.


        </Text>
        </div>
        </div>
        <div className="form">

    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="OP.GG"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Peak Rank (S12)"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div 
      className="mb-3">
        <button
          className="bg"
          type="submit"
                  >
        Apply to UBC Onyx
        </button>
      </div>
    </form>
    </div>

    </div>
  );
};

export default Contact