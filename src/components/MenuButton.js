import { useEffect } from 'react';

function MenuButton() {

    function openNav(){
        document.body.classList.toggle('show');
    }

    function preventFocus(e){
        e.preventDefault();
    }

    function isDesktop(e) {
        if(e.matches){
            document.body.classList.remove('show');
        }
    }

    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width: 850px)');
        mediaQuery.addEventListener('change', isDesktop);
        document.getElementsByClassName('text').innerHTML = "Menu"

        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

    return (
        <button className="button" 
                id="button" 
                onClick={openNav}
                onMouseDown={preventFocus}>
            <span className="button-content">
                <span className="text">Sections</span>
                <span className="more">More</span>
                <span className="bar"></span>
            </span>
        </button>
      )
  }
  
  export default MenuButton;