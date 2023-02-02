export default function handler(req, res) {
  const {method} = req;
  console.log("method: ", method);

  switch(method) {
    case 'GET':
      // get data
      res.status(200).json({pageName: "Dashboard Two page API"});
      break;

    case 'POST':
      // post data
      res.status(200).json({response: "POST successful"});
      break;

    default: 
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not allowed`)
  }
}


