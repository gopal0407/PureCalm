import "./shloka.css"
import { Container, Row, Col, Card } from 'react-bootstrap';

const shlokas = [
    {
        id: 1,
        hindi: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
        english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"
        },
        
        {
        id: 2,
        hindi: "अहिंसा परमो धर्मः",
        english: "Non-violence is the highest duty.",
        sanskrit: "अहिंसा परमो धर्मः"
        },
        
        {
        id: 3,
        hindi: "सत्यमेव जयते",
        english: "Truth alone triumphs.",
        sanskrit: "सत्यमेव जयते"
        },
        
        {
        id: 4,
        hindi: "वसुधैव कुटुम्बकम्",
        english: "The world is one family.",
        sanskrit: "वसुधैव कुटुम्बकम्"
        },
        
        {
        id: 5,
        hindi: "शांतिः शांतिः शांतिः",
        english: "Peace, peace, peace.",
        sanskrit: "शांतिः शांतिः शांतिः"
        },
        
        {
        id: 6,
        hindi: "सर्वे भवन्तु सुखिनः",
        english: "May all beings be happy.",
        sanskrit: "सर्वे भवन्तु सुखिनः"
        },
        
        {
        id: 7,
        hindi: "असतो मा सद्गमय",
        english: "Lead us from untruth to truth.",
        sanskrit: "असतो मा सद्गमय"
        },
        
        {
        id: 8,
        hindi: "तमसो मा ज्योतिर्गमय",
        english: "Lead us from darkness to light.",
        sanskrit: "तमसो मा ज्योतिर्गमय"
        },
        
        {
        id: 9,
        hindi: "मृत्योर्मा अमृतं गमय",
        english: "Lead us from death to immortality.",
        sanskrit: "मृत्योर्मा अमृतं गमय"
        },
        
        {
        id: 10,
        hindi: "अयं बन्धुरयं नेति गणना लघुचेतसाम्। उदारचरितानां तु वसुधैव कुटुम्बकम्॥",
        english: "This is my brother, this is not; thus think those of mean understanding. For the broad-minded, however, the whole world is one family.",
        sanskrit: "अयं बन्धुरयं नेति गणना लघुचेतसाम्। उदारचरितानां तु वसुधैव कुटुम्बकम्॥"
        },
        
        {
        id: 11,
        hindi: "विद्याधनं सर्वधनप्रधानम्।",
        english: "Knowledge is the best of all treasures.",
        sanskrit: "विद्याधनं सर्वधनप्रधानम्।"
        },
        
        {
        id: 12,
        hindi: "हे देव, सवा गुण दो निधान।",
        english: "O God, you are the repository of all qualities.",
        sanskrit: "हे देव, सवा गुण दो निधान।"
        },
        
        {
        id: 13,
        hindi: "धर्मः एव हतो हन्ति धर्मो रक्षति रक्षितः।",
        english: "Dharma, when destroyed, destroys; Dharma, when protected, protects.",
        sanskrit: "धर्मः एव हतो हन्ति धर्मो रक्षति रक्षितः।"
        },
        
        {
        id: 14,
        hindi: "धर्मो रक्षति रक्षितः",
        english: "Dharma protects those who protect it.",
        sanskrit: "धर्मो रक्षति रक्षितः"
        },
        
        {
        id: 15,
        hindi: "वसुधैव कुटुम्बकम्",
        english: "The world is one family.",
        sanskrit: "वसुधैव कुटुम्बकम्"
        },
        
        {
        id: 16,
        hindi: "विद्या ददाति विनयं",
        english: "Knowledge bestows humility.",
        sanskrit: "विद्या ददाति विनयं"
        },
        
        {
        id: 17,
        hindi: "शिव शंकरे नमः",
        english: "Salutations to Lord Shiva.",
        sanskrit: "शिव शंकरे नमः"
        },
        {
        id: 18,
        hindi: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
        english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"
        },
];

function Shloka() {
  return (
    <div>
            <section className="shloka-section" style={{ backgroundColor: '#ffffff', color: 'black', padding: '50px 0' }}>
                <Container>
                    <h2 className="text-center mb-5 pt-5" style={{fontSize:'50px'}}>Shlokas</h2>
                    <Row>
                        {shlokas.map(shloka => (
                            <Col key={shloka.id} md={4}>
                                <Card className="shloka-card">
                                    <Card.Body>
                                        <Card.Title>Hindi</Card.Title>
                                        <Card.Text>{shloka.hindi}</Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>English</Card.Title>
                                        <Card.Text>{shloka.english}</Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Sanskrit</Card.Title>
                                        <Card.Text>{shloka.sanskrit}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
  )
}

export default Shloka