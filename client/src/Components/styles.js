const styles = {
    primaryBackgroundColor: {
      backgroundColor: '#744bbd', 
      color: '#fff',
    },
    formHeader: {
      padding: '30px 15px'
    },
    formCard: {
      backgroundColor: '#fff',
      padding: '22px 24px',
      borderRadius: '.5em',
    },
    formHeaderTopCard: {
      backgroundColor: '#fff', 
      borderRadius: '.5em .5em .5em .5em',
    },
    formHeaderTopCardWithBaner: {
      backgroundColor: '#fff', 
      borderRadius: '0 0 .5em .5em',
    },
    formSubCard: {
      padding: '22px 24px',
    },
    marBtm20: {
      marginBottom: '20px'
    },
    marTop20: {
      marginTop: '20px'
    },
    formInput: {
      width: '100%',
    },
    formHeaderBar: {
      backgroundColor: '#744bbd', 
      borderRadius: '.5em .5em 0 0', 
      padding: '.3em', 
      color: '#fff'
    },
    purpleBtnWithShadow: {
      backgroundColor: '#744bbd',
      color: '#fff',
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    },
    modalSelectBox: {
      padding: '10px 0px',
    },
    paperContent: {
      margin: 'auto',
      // maxWidth: '700px',
      padding: '50px 10%',
      backgroundColor: 'transparent'
    }
}

// Apply different styles for smaller screens
if (window.matchMedia('(max-width: 600px)').matches) {
  styles.paperContent.padding = '50px 2%';
}


  export default styles;