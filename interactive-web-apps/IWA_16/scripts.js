// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this 

  const createHtml = (athlete) => {

    //assign the values of athlete
        const details = {
            id: data.response.data[athlete].id,
            fullName: data.response.data[athlete].firstName + ' ' + data.response.data[athlete].surname,
            totalRaces: data.response.data[athlete].races.length,
            date: new Date(data.response.data[athlete].races[data.response.data[athlete].races.length-1].date).getDate() + ' ' + 
            MONTHS[new Date(data.response.data[athlete].races[data.response.data[athlete].races.length-1].date).getMonth()] + ' ' + 
            new Date(data.response.data[athlete].races[data.response.data[athlete].races.length-1].date).getFullYear(),
            sum: 0,
        }

        //Get value of sum
        const sumLength = data.response.data[athlete].races[data.response.data[athlete].races.length-1].time.length
        let count = 0

        do {
          details.sum = details.sum +  data.response.data[athlete].races[data.response.data[athlete].races.length-1].time[count]
          count = count + 1
        } while (count != sumLength)

        //Convert to time
        details.sum = String(Math.floor(details.sum / 60)) + ':' + String(details.sum % 60)

        //creates elements
        const sect = document.querySelector('[data-athlete=' + athlete + ']')
        const heading = document.createElement('h2')
        heading.textContent = details.id

        const list = document.createElement('dl')

        const dt1 = document.createElement('dt')
        const dd1 = document.createElement('dd')
        const br1 = document.createElement('br')
        dt1.textContent = 'ATHLETE:'
        dd1.textContent = details.fullName

        const dt2 = document.createElement('dt')
        const dd2 = document.createElement('dd')
        const br2 = document.createElement('br')
        dt2.textContent = 'NUMBER OF RACES:'
        dd2.textContent = details.totalRaces

        const dt3 = document.createElement('dt')
        const dd3 = document.createElement('dd')
        const br3 = document.createElement('br')
        dt3.textContent = 'DATE OF MOST RACENT RACE:'
        dd3.textContent = details.date

        const dt4 = document.createElement('dt')
        const dd4 = document.createElement('dd')
        dt4.textContent = 'DURATION OF MOST RECENT RACE:'
        dd4.textContent = details.sum

        sect.appendChild(heading)
        sect.appendChild(list)
        list.appendChild(dt1)
        list.appendChild(dd1)
        list.appendChild(br1)
        list.appendChild(dt2)
        list.appendChild(dd2)
        list.appendChild(br2)
        list.appendChild(dt3)
        list.appendChild(dd3)
        list.appendChild(br3)
        list.appendChild(dt4)
        list.appendChild(dd4)

  }

  createHtml('NM372')
  createHtml('SV782')