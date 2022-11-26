import React, { useState} from 'react'
import './contact.css';
import { Text, StyleSheet } from 'react-native';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

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
      <Text style={styles.titleText}>
Applications
      </Text>
      <br></br>
      <Text style={styles.innerText}>
        Please fill out the form below if you would like to join UBC Onyx! <br></br>
        Note that only UBC-V/UBC-O currently on a study or work term will be considered <br></br>
        If you would like to apply to be a coach and/or manager, please let us know in the 'Peak Rank' text box


        </Text>

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
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
                  >
        Apply to UBC Onyx
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact