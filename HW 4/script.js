const ticketFactory = () => {
  let index = 0;
  return (time) => {
    index += 1;
    return {
      id: index,
      time: time,
    };
  };
};

const customerFactory = () => {
  let index = 0;
  return () => {
    index += 1;
    return {
      id: index,
      tickets: new Set(),
    };
  };
};

const storeFn = (dates) => {
  const tickets = ticketFactory();
  const schedule = new Map();
  dates.forEach((date) => schedule.set(date, false));
  return (time) => {
    if (schedule.get(time)) {
      return false;
    }
    schedule.set(time, true);
    return tickets(time);
  };
};

function main() {
  const schedule = Array.from({ length: 30 }, (_, idx) => idx + 1);
  console.log(schedule);
  const store = storeFn(schedule);
  const customers = customerFactory();

  for (let i = 0; i < schedule.length; i += 1) {
    const customer = customers();
    const time = schedule[Math.floor(Math.random() * schedule.length)];
    console.log(time);
    const ticket = store(time);
    if (ticket) {
      customer.tickets.add(ticket);
    } else {
      console.log("No ticket available");
    }
    console.log(customer);
  }
}

main();
