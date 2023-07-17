import React from "react";
import "./style.css";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <section className="contact">
      <Fade>
        <h2>Contact</h2>
        <p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABZVBMVEX////qRDXl5eUArEdChfTk5OTm5ub/ugDFJSjj4+P19fX4+Pju7u7w8PDr6+v6+voAqTszfvQ7gvT6pBXpOjdgtGzLKyq0xeuu0rTF1fqCp/G32r0Aq0r/twDqPi7y7vLMGQDBAADqNyUziv7I58/qLhjqOil5oOjO3P3qLRfpMx/IIBr///rCAAnEHSH79/D2jx//wADn2tdErT9odNLrZ11frjtXfOP26+ntxsbt6+H+6cjO2MLi3dLp7vTOiIPEMzLNXVvhr63j0Jz3v0b7uhzxyXzo4cLjvbv03bTyxm/OfXrISEjq1dLTcm/4xV/u2sbgZFvzqZHqoJnrbEPpWkzsQgDlwGDokIfpIiXmeG/sUTLyubTWt73zfibcysa+v93piYC9HDGeQn3FsgCgzrNuY794rCPpTD+bU468tCXqm5SMZKmbsjCmSXqAZrayPV/htxbRtRu4NlGosyzKZldxn/bsf9x4AAAQDElEQVR4nO1dC1sbxxVdLewa7RNcuxhjZCOMYmQDKQ4JIrYaO6ElcUniUrcupQ/n0Tgmaeokze/v7EPSzOw87szsSivMfF+8H+cjI47uzr3nHu2MLMuyfNu1fXR1XDtAl8B2HQy1RWg4Qr0CGueo69qRKerqosk/bwJDx3ZShnbOxW5C0TBD4xy17fzvG6IegTpS1C0NdXLU8n3fC4LAQ1d0CdElRNdzhKK30klD5GQhatrNJBhNABrnKHqz8jdNiKZvMBu1FVBXBXUS1GUuM+GSDEVoXIcl6eDoeGOoEq2yYlib9VLZOjz/uRS6+Ka7HjadbJk5zZQLunLReIRGXDQkUcdxKNRTRG0F1KXQZMose1C0cDSWoVERnSwtHH0TqoVyegnI9FJMOqrppdqkU8cEXyqaZRqtMg8q/uVINaXi75CoBV18U14tKothSXLbRMCdk3UY8tEx5NJxCjiHgZ7/euiUJdUodLyaRqh0eFJNKuAEUs1hEoCgtgLqglALemsaVAu7hFsTcMM6gmpRQX84aak2Qt+AHn9sPk1JAg4m1S68NsMYOrXx2uyp8doEokyKVpVLdQVcWVLtwmvTF3C0eFIVcKVJtZHXppRpHGamoTM1B/W4qG2MFqrFVHttBMqRalV5bbpSbWxeWzxMuTEzadcGjRVQkNdG1IUyvLZmWcXfZqHKXlsU2jvNXu9hMwiES3KM1cLt9/f333//wcNmX/q7Yq8tWWa9336wubq6if774NHjfnKLs2MokGplC7j9Dz86WMnGwe9+b/VtKrIKXpvlPrm7uTU3GFubq48OrXiioizuf/zRysql0VhZ+WQ/xn/XU/DavCerd+fIsbX5hyNaqul5bZoC7v0DnF5O8pPtvo7X5h9u0vxSjqufRtGE6qFvfVbkl8bxw76y12aHT1YZ/LI4Pg7TeShTqmqvze5/zghgzvEvfbHXxsg0j1gBzMfm0+1oApnmjzx+CcWPfIeTaSx2tRARRGHsHgfueL22cO9PAoIJxb6K1xY+ERJEo/3syCPTQKVem9s//rOIX3ajyry2XPrEYeA95q3B0WhtPLdi9LtBxJqBIalM0DDa/aswginFD/usGZjd056c4NyvG53GYWTstYEEXNTrXHn7NzKGl1a2wV7bp1tyhnONRmP9RLj4SqoWrnuy3vibnOClS5/1YV5bfAQIYRLERqPVPq3ca/N76G658isAwUsrD12e1xZmkipMpU8MCmEaxEaj+3TPKsyA/g2weUMT1Hu+jl4GFEIUxKSDQiOfweN4bREohFkQURi7x6ZeG45SmTDaedZGL3LlbRBBtBJBXtvfN2EMsyCiMD7bsyqSatZpt5W8xBVpIs0Zfgzy2oA36ZBho7XxInKr8Nr2drvZKwBvUnSbyr02lJqhBOeuDCg2Oi97wzzhMDONw8wpQrT/uNPKpr/yDyjDS02nkGkK1WIHuAwHCzEbGyd5x1FetXixPpgcugyTbGozqgXZH7r/hC5DgmGjtX7at5mJRE/AHbU6w7lhtSJl+Dn+N4y8tkzkROiC0vOhHkOUcXabVi60Ylw8pbIuUkPjsw1sZgWGHwf0vJZFd0/aDFH9Rx2HvlTD0L20RmgxBHht+gwbjfaznmdcLQLrdL3V0Gco9dp6BgwbScdh2AFH7qBGaDKkO+CByAlzmeSBCz6LYVo4/Ex+kfMORJkMtQ7bLXpOBYYPbnrUvMVc+i+taoGN9ZM9S1fAuViN0GJ4rZhL6XoYLX4BLfkcho1O51SzHgZJH2HC8OBrt1APaa/NXfxS5mDIGCYdhxdpeG3Bc0YAlRh+9bWNzTvy2nKhlWWapX9Db1M+Q5Rxjos3IS3VKDSiaoQOw2+W6c9rGL3F0gI01QgYosLxEu845NXC7R93CylGmeH8cuEjVDyGWX+4tPAt8DYVMkRS9XkUgaWa5RRqhAbDV/PLLK8tRiInSkROlIiceGnhvVulMGx0WodeQZQNX41ArR43gCoM7yOG+LwxerWCT+MuLqwBgyhjiMKIGkeAgEu9JsGAMnx1Yz6rFmKvbXFhdnYOVDDkDBud9uPAlVYLdo1QZzgzM3+tWC0YMZydfQd0nwIYJh3HjkyqnQkDCGf47pAh0QF7nu8hcYP+9YNUPC0hhmvfQSiCGKLG8Ri9AJo+EWXYq6WSCmmrHV6NUGX4/Q3EcDnO5x2+GiuXzgIpwhgmhWPwGQejHvJrhCLDnxHBmfllgNeWMkQUN6VrEcoQSdXnnHroCWqEGsMkghlDqdeWMZxde2dLllHhDFEm6TGkmtcr9hGaDN9NCaYMi14b1VssZgzR+I/kTlVgOPyMg5BUrD5Ci+GPM/kY5FLh5/gjhms/3BLeqUoMG63uKVktcK/JjOE3N2iGeG0SxHB2bfa/ojCqMUwKx140ZBgQXpMJw9czo8GKIRI3SKrFIdJScSJyQoxhmlP5YVRlmBeO5NW8nZfSGgFk+P0NguHNVKolwjDmeW1LOMPZtfc+4CYcZYaocOweJUUppr0mbYYH93GCeKbhe20kQ8TxW14YNRgmVpUbNZ9CagSE4SuCn6Ba8GOY1o05dhh1GCaF47SjEkARw3cpglnFZ3ltAw3loWWySDPk1g09hg2JzIYz/HGmMOavhV7KIrnwvDYWw7Uf7jLCqMtQebAZfkMHUL0eEgmHUTcmyvD1/SI/dvdU9NpYDJl1Y5IMf2YEMGUo9Nqw3oIZxi/u1oXh6/tsgjMsn0ZaLbDx7a16MHzFpjeoFnKvjctw7R0i4UyI4UGhRohjGI9ETpQIuHsChrNk3ZgMQ0aNIBgG0VCGcr02EUNUN7YmypBVI4qZRuq1iSjO/rQ6OYavRfRmFLw2McfvVrcmxJBTIwoMKa+NEDmeL16HKcX3ftqcBMMDXo3A12HqtWWcMgGH59KmLJeOOKb9xpgZ0n0EmyHYa5NRTPqNLWUJbcJQUCNIhkKvjdk9ccaXtx4pGBGmDL8C0Jthe23DXJoGldNbMMP4w//inooXYcJQXCMwhmQuVegtWOPyW5EbH28odrMao7t7FcZP5rUpxhAx3EcJau+ZmiOhPFrd41iZId4fRgORE2VeWwBneD1MxJ51WmkY2y+PQk+BYeK1+YhM6rUl3AA+DZ9hLhR88eebRqP7PPkT4Qx1vDYhwzwn98D2tdroNHqRp8pQsCtIN4bJ//pCyQAFjvUXkesoM2R5bbjIYXptbIZvbQ+MrdC3juQfdCqOVvvU99PpfZV1OJKhGSmY18ZhuI9vYvDOys043d1mlAfjplEuNamH+8Qe0mgH9HEnbLQ2ToOhHaHOkPTayCPMlBiSe0jd4BT2iad8tJM9HEP5pcKQ47WZ5lI/f9MiV/ETCc5YP4uILVpqmYbhRBlXi9Ee0vBQ3bSnR6d15Lv6DE28NhZDeg9paL0w7DjWTwrPwGnFkPDaMpGTCjiJ10YwvDcSe9gM1pFJx5Fs+IupeZUYBiMZmgo4DZ9myDDPNIVn1dxYv3B0d32LPmtHI9OYeG0EQ86JA/5oT5ZiADdOWc/AmVULemdXCTFMl+SxhoxDfQQWgeEzcEoxFHltHtRrGzC8fg8Te6MZsku8p9xxrJ/FfkFEJheVdViYQc9ryxkSz6rl2RjbbNDrqBSOVqM3FFr0M+E6udTQaxsxFJ2p4CoUju6J61u8B1CNuyctry3rnsTntUWHwMLRaj/OTkRgn8Gm0wEXvbYScykWTu8MknHau8KH+fVzabm9BfvEAUDH0do4DvEZnHIZmnht0UCqic5rQx2HuP63nx1F4kNAzPpDE69teyTVaKGFo1b4VFA4Ns5wocWcQYXhzbgCr82SHffh9g95VlWn0esTe0iZByBO3muTnteGOg5mxlk/CVzA5rbJe22QU5QYn3G02j3YztIaeG0FoVVEPf+Meiy/u+t6oBlq4rVx9oXiJy0QHUdr/TR5v/nb90byqy5eG+QEntHuimT3HnSzd228NsBxH1EzLxzpnm/oISDmXlvluRTPbslnHJ3GkdLpxwa51K6UocPcQ4o6jpOYf1wuC62V1ybdLRrbQdLJK53XVjOvTSTgMjRQ+F0Try029toi0XcjlHfatY7XJjrtutJqoXdk1AS9No5UK/u7EerptZWJKqzDa2Py2iSnJyijel4b/0wFJYZjOe26Pl5bUX6V890Ihl5bephs3ogmp7eo5NIscNlxtOjtx8LpEigtytiozUGVMw0xQ+nVwhEJOBWpVgevbR/itZXwLQi199qMURWGAem1BWV7bRV9MckUeG2TrhZj8dpMBFypXptXlddmgKp4bV6pXltEeG1lS7Xp9Nom0T2N12vTE3CleW2Z/FLLpSKpZiLgSFQnlw5mKKlaCKWarSXVpthr0xBwU+e1gVFfw2uLEqlWstdW9TfLTc5ruz4d1eLCaxPFcFxem8q+p9K9Nvqo+Quvbfq8NvZ3q9fUa8uElorXFulINYiAc0lUw2vDZqjQazOUahU9uWfyXNvg76Oea5Oj9CYQ19hrc0vy2sIqpVoJXlt04bUBGE5LtTD32thfLnPhtV14bRV5bXem2mt7UPyuINprs53LcIaE1yYTcGPx2jjfQ4q4jrw26xcgRdxrc4cyiRRwDDSWoQwBB2Z4tThDsVqAkylWLcQfi47Pa0OplOO1uQ7GMITepQTDSgUcmCFjhoLXhn4EZtNSvbaiVNPw2uavWblUE3ltifyCrcTaeW3zV29S37nA/R5SaxZCsX5eW3FRs7y2VH7FEIocr00o4Cr02uZn7tEzsL227LL9i3wtXr6+XSOvDd2i7Bksi/bacgF3Z3ZBEsc6eW3zN5atgtjjeW2DJXlv8ZfLC8Ixxu5pXjhmrt4umj58r20o4Ox9t3/nzp3FxcUldFlC1zujHxeTH7lSzSlBquHog+Xl5du3by9nl9ujS3p9GN3EflfmteUCbiCpoijV6sn5BFbmeGAoW6opoNgMkRQd/Q0Jn6SqYqhoBma1oG7YweEn5E3IRsVSrUwHDooWvDaHyZDc4USglXtthmj1T6VpSjU+GiihWabBvTZSwGH5hxBlw6ZwLF4bG6VdNTZq8RefTSwzNjqmaqGyR0rutVECjkIxUcZGmVXcVMDR/pkKWtxDOib/bGxowWsjvkieCieJxiRaoddmhoLqIXfxjad7Ul98Iq+NJeBiGSrw2soWcGyUlmocr60otNiomVSDCji3JNTi35oOXMBV7bWZoJYllWoAAVe112aCMry28yDVZF6bQKox0Mq9NkMBd/6rBdNr4wg4qFSrl4Cro9AqFbWIwMmlms+ValV6bSYCzoIuvununtheW+lSDSLgVKQaTMBhXluib4pSbYB6FaBFt64sqSbw2hSk2rn02miGtZVq4/faxi3VCl7bJDONw8weENQFoSnD818txuu1aQi4C69N4rWxNfaF1zY93dNkvLayBZyy13aeBFzKkCdk3myvjeZSWwFXQ6+tDKmGe23mmaaYPVQzjYpUUxZw/weGW8XdW6cgdAAAAABJRU5ErkJggg=="
            alt="Gmail Logo"
            className="logo-icon"
          />
          joyrocknielabadi@gmail.com
        </p>
        <p>
          <img
            src="https://w7.pngwing.com/pngs/1010/451/png-transparent-whatsapp-logo-whatsapp-logo-computer-icons-messenger-text-grass-mobile-phones.png"
            alt="WhatsApp Logo"
            className="logo-icon"
          />
          +62 821 9577 5555
        </p>
        <p>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8PDxAQEA8PEA8PDw0NEA8PDw8QFREXFhURFhUYHSggGBolGxUVITEhJSkrLi4uFx81OjMsNygtLisBCgoKDg0OFxAQGi0lHiYtKy8rLS0tLS0tLSstKy0tLTArLS0tLy0tKy0tLS0tLTArLystLSstLS8tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBgcFBAj/xABOEAACAQIBBwUIDQoGAwEAAAABAgADEQQFBhIhMUFRB2FxgZETIjJCUpKhsRQXIzRTcnSis8HC0dIWJENUYmOCk7LiM3ODo9PwhMPhRP/EABsBAAEFAQEAAAAAAAAAAAAAAAQBAgMFBgAH/8QAQREAAQMBBAYECgkEAwEAAAAAAQACAwQFESExEkFRcaGxYYGR0QYTFBUiMlLB4fAjNEJTcoKistIzNWLxJEOSFv/aAAwDAQACEQMRAD8A3GEJz8sZVpYSi1eu2ii8NbM25FG9jbZFa1ziGtF5OQXL11qyopd2VVUEs7kKqgbSSdglCzg5TaFEsmETu7i47qxK0Aebxn9A4GUXOzO7EZQcgk06AN6eHU97zM/lt6Bu565aayhsBjRpVGJ9kZDeRieW9GMp7sXdismU8+8o173xDUlPiYb3EDoYd/8AOnDxGOrVf8SrVqfHqO/rMgAi2l9HDFGLmNA3ABENYBkE2JJNGBEkvUoYojEtJdGGjGlynbEorRbSTRi6Mic5EthUQWOCyTRihZGXohsKjCxwWShYoWMLkQ2BRhYoWP0YoWN0lKIkwLFtH6MXRjdJSCNMtFtH2i2jdJSBikoYmpT8BivxGZfVOzgs8sfRNxiGYb1qk1QebvrkDotODaFoPIxjvWAPUEjqeN/rNB3gFahkTlIpuQmKTuZJ/wAWlcp1rtHVfol6wuKp1UFSk61EbwXQhlPWJ862nYzfzixGBfSpsShI06bklGHOu49GuVFTZrDjFgdmr4clT1lgxvBdB6J2aj3cty3qE5GQMt0sbSFSkbEWFSmSNOm3A83A7+2deUjmlpuOayj2OY4scLiMwiEIRE1RVqqorO5CqoLMzGwVQLkk8LTCc9s5XyhiCRcYemStCmdXe76hHlN6BYcb3vlYy0aOHTCIbPiLtUttFFSO9/iaw6FYTJLTV2DQhrPKHZn1egZE9Zw3b0dTRYaZ6k20W0daOAmkJRgamgRQseBFAjb1I1iZaLox9o+nRZmAVWYnYqgsT0AbYwuRMcSh0YaMsGEzNyhV2YWoo/fAUvQxE6dLk6xx2iivM9UH+kGBSVsDfWeO0KQSwM9Z4HWFTNGGjL6OTLF/C4cdL1PqSHtYYr4bD+fU/wCOCutGm9sKZlbSDOQcVQwsULL4OTHE/DYfz6n/ABxfayxPwuH8+p/xyM2jTj7Y49ynFfR/eDiqIFihZe/ayxPw2G8+p+CL7WeJ+Fw/n1fwRvnCn9scVILQovvAqJaOAl59rTE/C4fzqv4Ie1pivhsP1NV/BE84U/tjj3JwtGi+9Co1oWlyfk7xg2Gk3xag+sCc/E5mY+ncmgzAfBsHJ6AtzHNq4XZPHapmVlK/1ZW9oHNV20LT1YrBVKTFalNlI8VkYN2Gee0m0taMDbxemWi2j7RtowuS6KbaJHRJE4p2iupm5lqrgq61EN1vZ0JsrLfWp+o7jNxyfjExFNK1M3p1AGU7+g8CDcEcRPnozRuSvLB7/BudRBq0rneLaSjpFjb9luMqq+IOb4wZjks/b1AJIvHtHpNz6W/DktKhCEqFjFhfKDjjiMo4g3utFhQQcBT1MPP0z1yuWnrx9TulWrU+EqVH85ifrkOjPR4WiONrBqAHYFoGRaLQOgKO0UCP0YoWPvUgjTQJJRos7KiKzMxCqqAsxJ2AAbY+hQZ2VEUszsFVVFyzE2AE2HM/NVMEgdwHxLjv6m3QB8RDw4nf0WEr66vZSs0jiTkNvw56k2eZtO284nUPnUuBm7yciwqY0nj3Cm2oczMPUvbL3k/JtDDrahSp0hv7moBPSdpPTPXI6tVVBZiFUayzEBQOJJ2TIVNbNUH6R2GzIdneqOaoklPpnq1dikhK/j88sDRJBrd0I2rRBqenwfTObU5RsL4tOsfjdyT1MY1tJO7EMKmjs6qeL2xm7ddzVyhKE/KXT8XDOemqg+yYz2zV/VG/nD8Ek8gqPZ4jvRDbErnZR/qb3rQITP8A2zF/VW/nD8EPbNT9Vb+cPwRPIaj2eI707zFX/d/qZ/JaBCZ/7Zq/qrfzh+CHtmJ+qt/OH4J3kM/s8R3pfMNf93+pv8loEJQPbMT9VP8AOH4I5OUynvw7DoqqfsiJ5FP7PEd6abDrx/1/qb/JX2EplLlFw3j0qw+KabfWJ78Jntgalh3RqZO6qtvStwIw00wzYexQvsqtYLzE7qF/K9d3E4VKo0aiJUXyaihx6ZTsu8n9KoC+FPcnvfubG6NzBtq+kdEudDEJUUPTdXU7HpsHU9YksbFNJEb2G752ZKKmrKild9G4jaNXWCsBx+BqUHanVVkcHWGGvpHEc4nlm35xZApY6louLVFB7nVsLrzHip3iY3lPA1MPVelUXRdDYg7OYjiCNY6Zd01WJhsOv4LcWXacdaw6njMe8dHLn4jEjjEMlLla6KbOlm5j/Y+LoVrkBKil9HeukAw7CROaYKbEHgRIH3EEFI6MPBa7I4HcV9IQmT/lm3lNCUvk8mxYPzFUKlaMNGT6MNGb/TVz4pQ6MNGTaMWnT0mVQLlmCqOJJsB2xNNK2LFX3kwyELNjag3slC+4agz/AGR/FNEnkyXgxQoUqI2UkVL8SBrbpJueuT1aoVSzGyqCzMdgAFyZhqypNRM6TVq3alkqmfx0pf2btS5ecWXKWCpaT987XFKkCNJ2A9CjVc/XMnyzl3EYx71XbRvdKaaS01+KL6jzm/TFzjyq2LxFSq19G+glM+LTUmy9Ou55yZzbS9o6NtO0F3r6zs6B85rWWbZradoc4enrOzoHzjuzYRC0faIYQ56vGNTbRLx0bIi9EAJIRTEjdJORCEIukuReF4Qi6S5F4XnczTzebH1St9GmgVqj2vog7FA8o2PYZo9DMnAKoU0dM2sWqVKmkefvSAOoCCzVkcR0Tn0KqrbYpqR4Y+8u2AX3b7yO9ZVkvK9fCtp0ndTquoPesOBGwjpmrZqZypjksbJXUXeluYeWl93Nu9JqGeWZq4ZPZGHLGkCFemxu1O5sGBG1d3Eatu6p5Mxz4erTq0zoujhgd3ODzEXB6ZDK2OqZpNz+cCh6imp7Wg8ZF62o5G8andHLMYZ77KdyiZDFfD+yFHutAa7ay1IXv2bejSlnybjFr0adZfBqoHA2kX2qecG46pPVphlKsAVYFWU7CCLESpY8xuDhqWMpqiSknEgzacRwI5/7Xz00aZ7suYL2Pia1E39zqOoJGsqG1N16j1zwS6L7xeF6gxweA5uRxG4pDGx0JE5ydcmwiwjNJdcuhaFo6BE0fjFTaCjtOzmbh+65QwwtqV+6X/ywXHpUTkGWjk4p3xwPk0qregL9qDVU2jC89B5IerGhBI7Y08lqsr+fOMNLAViDY1LUl/iOseaG7ZYJT+U5/wA0pL5VbS7EYfamXpQDMy/asjZ0YfVRNO0cMVl4EW0daFpoXyr0BrU2NtHmNMHdKiAmmIBPZkvJlXE1BSooWY2Ood6o1XLHcNe2aVkHMjD0AGrgV6mo2OuiDzDxuk9gg8tS1meaCrbTgox9IcTk0Z/Ab+q8rNMBknEV/wDCo1KljYlEYqDznd1zsUMxMe+2mq/GqIPQCZrtNAoAUAAagoAAA5hHwR1c/UBzWck8Jpyfo2NA6byeYHBZDVzAxw2IjdFVL+kicfH5BxdDXVoVVUatPRYr5wFvTN2gZza+QZgHgui8Jqgf1GNI6LwfeOC+eTq2wmxZczNwuKBKqKFU+PSVQpP7S7D0ix55l+Xch1sHUKVV1aytRblHHEN9W2HQ1TJcMitFQWtT1mDDc72Tn1befQtA5LCvsSra2n3bv+Nu5ro+nSl0mH5r5wPgKumBpI4C1aZNgy8QdxG4854zSqGfOAZdI1Gpn4Ooj6Xzbj0yvqYX+MLgLwVm7ZsupNS6WNhc12wX3YZEDJdbL5HsTFXtb2PW2/5Zt13mD1DrPTLlnnnmMUnsegrLSuGd3sGqEXIFgfB38Tq2SlQmkjdG06WtXtgUUtNA7xouLjfdsHT0/OeWtcmGM08I1Mm5pVTYcEdQR6Q8uMzfklq99ik8pabdhI+1NIgNQLpXLK25GI6+UDXce0Anisk5UMNoY7TH6ajTc9Wkn2BKdNA5W0tUwzcUZexifrmfwqJ30YW1sd+nQwnou7CR7kRDCJOc5WaWESEZpJbl1LwiXhLozBVuiiW/ky991ebD1PpKY+uVCXDkxH53V+Tv9JTglVNfE4IK0hdSS7lpco3Km3ueFHF6p7EUfXLzKHyp7MJ/rn0U5U05ukB38ispYovro/zftKz+ITFMbaGunW+ASEz05Kye+JrJSpC7MbawdFRvZiNgG2QWmocn+RhQw4rsPdcQLi+orR3D+LwuteEhfPcMEFaNaKOAya8gOnuGfDMrtZDyPSwdEUqQuTYvUIAao3E8BwG6dOErOd2c4wS9zp2fEuLgHWtJfLbieA/6Q8SVg4456ye4ek93zedgXax+UaNBdOtUSmu7TNi2rxRtY9Er1flAwYNlFapwZFQKe1gfRMyxuMq1nL1XZ3baWYk9A4Dm2CQEQlsDdZWqpvBynaPpnFx6MB38ty1OjyhYM2BWuL7ytMgdPfX9E7+Tsr4fEi9CqlTfog9+OlDrHZMLIj6Fd6bB0ZkYG6lSVIPEEaxHGmZdgU6fwcpnj6Ilp7R38epfQE8mU8n08TSalVXSRu1TuZTuIlVzKzv9kWw+IIFb9HU2CrbxTwf0Hp23WCuaWOuOaylRTTUc2i/BwxBHAgrDM5sivgq7U2F0PfU33OvinmO4jj1GcibXnlkYYzCuoF6tMGpSO8sBrTZ4w1dNuExR1sSOEsoJtNuOYzW8se0PLINJ3rjB3uPXzB1JLxIQkhcrZXzklb84rDjRY9lRPvmoTLOSX31W+Tv9JTmpysnN8h6uS8/8IhdXO3N5LOuV1e9wh56w9CffM3mk8sHgYPpr+qnM1kkZ9ALVWD/b4vzfvciJCJFLlcJYkIRmklXUvFvEAi6Me6oQWCLy4cmPvqr8nf6SnKhaXDkx99Vfk7f105A+fSFyr7T+py/hK0qULlTHvT/yPXSl9lE5Uv8A8n+v66UjLtHFZOwvr8f5v2OWf6MNGOtC0Z45bu9T5KwXd8RRpfCVEUkbQCwuerWeqbhTQKAoFgAAANgA2CZTmDSvj6RPirVb5h++axHNdpYrH+EcpM0ceoNv6ye4BeTKeMWhRqVn2UkL2OrSO5Rzk2HXMTx+KevVeq50ndmYt07hzDYBuAE03lHqlcEFH6SsisOKhWb1qJl1o4PuKsPB2ANgdKc3G7qHxz3BMiWj9GJaTtetFemERLSSJJQ9LemIxUgqSGBBDKbMCNhB3GbXmzlT2XhadY207aFQDdUUa9W6+puhhMVImh8leIJTE0jsDU3A6QQ3qWNmIc1UnhBTtkpPGa2EHqJuI5HqV+mIZ8ZP7hjq6gWRj3RbCw0X76w5gSR1Tbpl/KxT/OKDcaIXsqP9/okUDtF6pfBuUtqyzU5p4Y96ocIERDCy5b5Xnkl99Vvk9T6SnNUmV8kvvqt8nqfSU5qkBkN7z86l5/4R/XT+Fqzvlh8DB/Gr/wBKTM5pnLB4GD+NX/pSZnHsOAWqsH+3xfm/c5EIRJxKuEQhCclXWiiKBHSqMyr7020uHJmPzqt/kP8ASU5UpbuTMfnNX/Ib6SnEZJe9o6UBah/4cv4StHlG5UNmF/8AI9dKXqUflOGrCf6//qhVSboyd3NZOxPr0f5v2OVBhJLRLSu8atxeu/yfuFx9MeUlUdegW+zNUmNZFxXcMTQq7FSopa23QvZvmkzZTD6Z+kCsj4QsumY/a27rB7iFVOUimWwaEeLXUnmBRxftt2zM9GbTlrBDEYerRNruvek6gH2qfOAmOVqLIzqwKlSVZTtVgbEHriyktcrGwKgOpzHraeBxHG8f7UBWNIkpEQiK2RX+koisbaSlYhEmbInaSiIl+5K6OrFPx7kgPEnSJ+z2yihbm017NDJhwmERGFqj+61BruHYDvTfeFCjpBjy+8Knt6cR0ZYc3EAdRBJ4DtXcmY8qz3xGHThR0u2ow+qadMbz+xndsfVsbrSIogHdoAg/P0ojTcQqTwcjLqvT9lp44e88VWiJGRJiIwiS6a3oKuvJJ77rfJ6n0lOarMr5Jffdb5O/0lOapISb3FYHwk+un8LVnXLB4GD+NX/pSZpNL5YfAwfxq/8ASkzSPGS1dgf2+L837nJIQhFVuiEWEW5cuzFAjgI4CZh0qrSUgEtvJt77q/J2+kSVUCWzk5FsU/ydx/uU4+mkvmaOlAWkf+JL+ErRJSeUoasL01//AFy7Sm8o6XXDHg1QdoX7paVpugd1cwsnY5urY/zftKoejDRkujF0ZRCRbXSUWhNOzOyl3fDKrH3SiBTa+0r4rdgt0qZm2jPbkfKD4WstRNe513Mh2qf+7QIVTVPi3gnLWgLRpvKoSwesMRv2dfO5a3Kjndmz3e9egPdrd/T2d1A8YftD0+uyZPxlPEU1q0jdW7VO9SNxE9Uu3NEjehY+nqJaWXSbgRgQeIKxB6ZBIIIIJBBBBBG0EbjGETX8qZCw+J11aff2sKqd7U7d/XeV3E5gLf3PEMo8moise0EeqCmGRpwxWqgt2me3072ncSO0e8BUErEC3l8pcn4v3+I1bwlPWestq7J3slZtYXDEMiF3GyrWIdgdtxuB1bQLx7WP1p81u0sYvaS49AI4ke47lWsz81GDLicStgCGpUWHfFtodxuA2gbb+m/wkWJxCUkapUYIiDSZm2AQkC4LKVdXLVy6b9wA1dA+c1z85MqjCYapV1adtCkDvqkd7q3gayeYGYq9zrJJJ1knWSeJlgzsy4cbVuLrRS60kPDe5/aNh0WA5zwWEhMuK2djUPkkPpes7E9GwdWvpJUBEYRJyJGRHaaugVcuScfndb5O/wBJSmozMeSpfzmueFBh21E+6afHtN6wnhEb607m8lnfLD4GD6a/qpzM5pfK+e9wY58QfRTmaGPC1dg/2+L837nJIsIslAVwkhHRI/RXLv2igRQI9VmFdIqnSSBZZswjbGdNKoPUfqleCzr5qVNDG0DuLFPOUqPSRHUs107CdoQVb6VPI3/E8lqEq2f9O9CieFW3ah+6WmcPPCh3TCPYXKMj/ZPoYzS1oJp5Lth4YrH2e/QqYz03duCznRi6MkCRdCZASrZ6Sh0IaEn0IujJRIu0lNknKlXDPpUzqNtOm19Bxzjjzy+ZJy/QxNgD3Oof0VQgEn9k7G9fNM80YaMOpq58WAxGxA1dDFU4uwdtHv28+la5Ema4TLmKpWC1WIHi1LVF6O+1jqnRXPSv41Kkfiiov2jLZlpQuzvCpH2NOPVIPXdzw4q8wlGq56V/FpUgf2u6H6xOXjc5sZUB90NMHxaPudusd96Y818Wq8ro7FqHH0iB138gr1lbLeHwoPdX7+2qklmqHq3DnNhM5zhzgq4w2PeUlN0pKdV/KY+M1t+7dz+BxtO86yTtJ4yNlg7qov6Ar+hsyGmOkPSdtOrcNXErzERjLJ2WMKxA9XAK87LI2WegiRkSVr1KCrryUp7pin4U0Hax/DNGlM5McGFw9eqdXdaoXpCJt+eR1S6Q2LFoWCtuQPrpLtVw7GgFZpyutd8KvBHPa1vqmeES78qNcPjUQHXSo01YcGJZ/UwlMZY5pxW0sZuhRQt6L+0k+9Q2iiOKwtC2C9Wt6SEdCT6KRWJVkirBVkqrPMnOVM4pFWTYdyjK66mVgy9INxBVkipIi4jJQuctTw9YOiVF8F1Vh0EXi1qQdWRhdXUqw4gixlezOx90NBj3yXanfehOsdR9fNLLN1TTtqImyDXnv1hYeohMErmbDhu1FZjjcE1Go9JtqG1/KG4jpGuQBJoGW8kLiVuLLUUd652W8lub1Sl4jCvTYpUUqw3H1jiOeZG0KN9K/wDwOR9x6efaBpaSubOz/LWPeOjkvLoQ0JNoQ0IA2RF6Sh0ImhJ9CGjJmyrtJeYpGFJ6ikaUkzZU4PXkKxhSespI2STtlUgcvIVkbLPWySJlk7ZFK1y8rLImWeplkTLJ2yKZrl5mWJQw7VHVEUlnYKFG0kmwE9NPDs7BEUszGyqoJYnmE0PNPNkYUCtVAbEMNQGsUQbXAO9jvPUN5JsDTIbh1oetr46SPSdidQ2++7afeu3kbADDYelRW3uaWYje51u3WxJntJ46hvJiysZ+ZX9j4Zqan3WuDTFtopkd+/ZqHO3NLUkNCxEMUlVOG33ucc9+JJ3YkrM84cb7Ixdatueo2jfyQbJ80CcwiTkRhEjjN69MYGsaGtyAAG4YBQFY0iTWjSssoVMCorRY7RhCrkt6tlWlosy71LL2G0VVnTzjw3c8XXB2M5qDofvvWSOqeJFnldQNCRzdhI7Cs82TTYHDWAe0IVZIqxVWTKsFLkxzkuGqNTdXQ2ZTcGXzJeUVxCXGpx4ab1PHolFVZ6MNVamwdCVYbCPVziHWfaTqR5wvacx7x081XVlM2dvSMj39HJaBIcTh0qDRqKGHAjZ0HdOZk/LiPYVO8byvEP3dc7CsCLggg7CNYM2UFRDUsvjII1/EautZ2SOSF3pC4/ORXFr5tUTrRnTscDt1+meNs1m3VVPShH1mWeEGksmjebzGBuvHAEDgp211Q37Xbceaqv5L1Nz0+vSH1RpzYq+XT7X/AAy2QkXmSj9k/wDo96eLSqBrHYqkc1a3l0vOf8Mac1K3l0vOf8Mt8Ivmak2HtKd5zn6OxU85qVvLo+c/4Y05pV/Lo+c/4ZcoR4smm2HtKXzrUdHYqWcz6/wlHzqn4Yw5m1jtqUeoufsy7wjhZlONR7Sl871O0dipIzHc7a6DoVm+6ezDZj0BrqVaj8yBaY+s+mWqElbQwN+z2knmU11q1Zw07twA5BePAZNoUBalTRCdRYDv26WOsz2RD/0yvZXzsw9AFUIrVOCEGmD+0+zqF+qTucyJuOA+ckNHFNUvOiC52v4k8yunlbKdPC0jUqHVsVR4TtuVRx9UyPLGUqmKrPVqbTqCjYqDYg5hftJO+T5WyjVxNTTqtpbgovoIOCjcP+65zmEAfUeMOGS2Nl2a2kaXHF5zOzoHvOvcoGEYVk7CMtCInK6DlDaIVuZKRJ8l4M1sRRpD9JURdW4FrE9QueqW0JuxKdphuLshmuv+StTgeyJNh7kvkr2CEi8pesV/9DPsVYz1wGkqV1Hge5v8UnvT2kj+ISpqJqNeitRWRhdWBVhxBmfZTyc2HqlDrG1G8pdx6eMx9uUpa/x7cjn0HuI470tl1WlH4o5jLd8OW5eVVkqrEQSZRM4SrBzkKseFigR4WRlyiLk0CeihWen4Dlfik2PTxjAIoWNa9zTpNNx2jAqNxBFxXQpZcrDwtF+lfutPQM4H3016iROTow0Ycy161guEp67jxIKGNNCfsjlyXZGcJ+CHn/8AyH5Q/uv9z+2cbRhoyTz5X/efpZ/FN8kg9nie9dn8of3Xz/7Y38o/3R8/+2cYrGkRfPld95+ln8UvkdP7PE967Zzk/cnz/wC2NOc4+B/3P7ZxCsjZY8W3W/efpZ/FPFFT+zxd3ruHOn9x/u/2yNs7P3A/m/2zhMsjZZK22aw5yfpZ/FSihpvY4nvXbfO991FOtmM8OIzsxLeD3JOdVJPziR6Jy3WQOsmFpVLvWeeA5AIiOhph9gdd55kox+UsRW/xKrsPJJsnmjV6JznWepxIGEe2QuN5N5VnHc0XNwGwYBedhImE9DCQsIbE5EtKgIjSJKwjSJZROUoKgYS6cmeStKs+KYd7SBRDxqNtt0KfnCVfJmT3xNVKVMXZjbmUby1tgA1zZck5PTDUUopsUC7Ha7eM55zLIP8ARuVPblcIYPFN9Z/Buvty7di98IQjFiUTw5SwCV00H1Ea1YbVPGe6Ea9jXtLXC8HNOa4tIc03ELP8bgHoNouPisNjDiDGKJfa9FailXUMp3GcLF5vHbRbV5D7e3f1zJV1hSsJdB6Tdn2h3896uYbQa8XSYHh8PnFcNRHgSWrhKlPw0K85H17I1RM5I1zHaLwQdhFx7Ci9IOF4QBHAQAjpFemEpLQtFhEXJLQtFhOvXJtohEfEIirr1EVjGWTkRjCOvTwV5mEidZ6WEhcSVpUrSvK6yBxPW4nncQuNyJYV5XEgcT1OJ52EOjciWledhIWE9Dx2GwFWsbUqdSpu7xWYDpI1Drh8TrzcEQDoi85LwkSbAZOq4ioKdJCzHhsUeUx3DXtlryXmNVYhsS4pr5FMh6nRfwV9MuuTcm0sMgSigUbztZjxY7SZc08L8zgqustqGEXR+m7gN519XavDm3m/TwVOws1VwO61bbf2V4KPT6u5CEPGCyU0z5nmSQ3kohCE5RohCE5ciEITlyJWsrbTCEq7c+qIui/qLnCLCE87VwiEITkiIQhOXIhCE5cmxrRYRQnhRNIXhCStUjVC88zwhCo80QxQVJ53iwhsaLZkupm94Y6ZpVPYOgeqEJrLM/pLN21/UCdCEIeqdEIQnLkQhCcuX//Z"
            alt="Instagram Logo"
            className="logo-icon"
          />
          joy_rockniel
        </p>
      </Fade>
    </section>
  );
};

export default Contact;
