const day = 'Monday'
switch (day) {
    case 'Monday':
        console.log('plan goes to structure')
        console.log('Go to coding meeting')
        break;
        case 'Tuesday':
            case 'Wednesday':
                console.log('They should resume quickly')
                console.log('What are they still doing at home')
                break;
                case 'Thursday':
                    case 'Friday':
                        console.log('school closes by then')
                        console.log('yeah that is it')
                        break;
                        default:
                            console.log('not a valid day')
}
const language = 'Spanish'
switch(language) {
    case 'Chinese':
    case 'Madarin':
        console.log('Most number of speakers!')
        break;
        case 'Spanish':
            console.log('Second place in number of native speakers')
            break;
            case 'english':
              console.log('3rd place');
              break;
            case 'hindi':
              console.log('Number 4');
              break;
            case 'arabic':
              console.log('5th most spoken language');
              break;
            default:
              console.log('Great language too :D');
          }
const population='34000000';
const country='Portugal';
console.log(
    `${country}'s population is ${population>33000000? 'below':'above'} average`
)
/*const bill=275;
const tip= bill <=300 && bill >=50 ? bill*0.15:bill*0.2;
console.log(`the bill value was ${bill}, and the tip value was ${tip}, and the total value is ${bill+tip}`);
const bill=40;
const tip= bill <=300 && bill >=50 ? bill*0.15:bill*0.2;
console.log(`the bill value was ${bill}, and the tip value was ${tip}, and the total value is ${bill+tip}`);*/
const bill=430;
const tip= bill <=300 && bill >=50 ? bill*0.15:bill*0.2;
console.log(`the bill value was ${bill}, and the tip value was ${tip}, and the total value is ${bill+tip}`);