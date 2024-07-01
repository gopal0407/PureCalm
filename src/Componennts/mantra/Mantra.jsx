import "./mantra.css";
import { Container, Card } from 'react-bootstrap';

const Mantras = [
    {
        id: 1,
        title: "Om Namah Shivaya",
        mantra: "The most well known and basic Shiva Mantra which simply translates to ‘I bow to Lord Shiva’. It is dedicated to Lord Shiva and if chanted 108 times every day, this mantra will help you purify your body and Lord Shiva will shower his blessings on you."
        },
        
        {
        id: 2,
        title: "Om Mani Padme Hum",
        mantra: "A powerful mantra in Tibetan Buddhism, it is associated with Chenrezig, the bodhisattva of compassion. It means 'The jewel is in the lotus' and encompasses the path of compassion."
        },
        
        {
        id: 3,
        title: "Gayatri Mantra",
        mantra: "Considered one of the most important and powerful mantras in Hinduism, it is dedicated to the Sun God. Chanting the Gayatri Mantra helps in purifying the mind and soul."
        },
        
        {
        id: 4,
        title: "Om Shanti Shanti Shanti",
        mantra: "This mantra is often recited three times to promote peace and tranquility. It is a prayer for peace in the physical, mental, and spiritual realms."
        },
        
        {
        id: 5,
        title: "Aum",
        mantra: "The primal sound of the universe, Aum represents the essence of the ultimate reality. Chanting Aum helps in concentration and meditation."
        },
        
        {
        id: 6,
        title: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare",
        mantra: "Known as the Maha Mantra, it is a chant to invoke the divine energies of Krishna and Rama. It is believed to bring joy, peace, and spiritual liberation."
        },
        
        {
        id: 7,
        title: "So Hum",
        mantra: "A simple yet profound mantra, So Hum means 'I am that'. It signifies the unity of the individual soul with the universal consciousness."
        },
        
        {
        id: 8,
        title: "Lokah Samastah Sukhino Bhavantu",
        mantra: "A Sanskrit mantra that means 'May all beings everywhere be happy and free'. It is a prayer for the well-being and happiness of all."
        },
        
        {
        id: 9,
        title: "Sat Nam",
        mantra: "A Kundalini Yoga mantra meaning 'Truth is my identity'. It helps in connecting with the divine truth within oneself."
        },
        
        {
        id: 10,
        title: "Aham Brahmasmi",
        mantra: "An ancient Sanskrit mantra which means 'I am the universe' or 'I am Brahman'. It signifies the interconnectedness of the self with the cosmic consciousness."
        },
        
        {
        id: 11,
        title: "Tayata Om Bekanze Bekanze Maha Bekanze Radza Samudgate Soha",
        mantra: "The Medicine Buddha mantra is believed to have healing powers. It invokes the blessings of the Medicine Buddha for physical and spiritual healing."
        },
        
        {
        id: 12,
        title: "Shanti Mantra",
        mantra: "Om Dyauh Shanti Rantariksha Gwam, Shanti Prithvi, Shanti Rapah, Shanti Roshadhayah, Shanti Vanaspatayah, Shanti Vishwedevah, Shanti Brahma, Sarvag Wam, Shanti Shanti Revah. Om Shanti, Shanti, Shantihi."
        },
        
        {
        id: 13,
        title: "Aham Prema",
        mantra: "A Sanskrit mantra meaning 'I am divine love'. Chanting Aham Prema helps in cultivating self-love and compassion."
        },
        
        {
        id: 14,
        title: "Om Gam Ganapataye Namaha",
        mantra: "A mantra dedicated to Lord Ganesha, the remover of obstacles. Chanting this mantra helps in overcoming challenges and seeking blessings for new beginnings."
        },
        
        {
        id: 15,
        title: "Om Namo Bhagavate Vasudevaya",
        mantra: "A powerful mantra dedicated to Lord Vishnu, it means 'I bow to the Lord who resides within'. It invokes the presence and blessings of Lord Vishnu."
        },
        
        {
        id: 16,
        title: "Om Aim Hrim Klim Chamundaye Viche",
        mantra: "This is a powerful mantra dedicated to Goddess Chamunda, a fierce form of Devi. It is chanted for protection and to overcome obstacles."
        },
        
        {
        id: 17,
        title: "Om Gum Ganapataye Namaha",
        mantra: "Another mantra dedicated to Lord Ganesha, it is chanted for success, wisdom, and the removal of obstacles on the spiritual path."
        },
        
        {
        id: 18,
        title: "Om Tryambakam Yajamahe Sugandhim Pushti Vardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat",
        mantra: "The Maha Mrityunjaya Mantra is a powerful mantra dedicated to Lord Shiva. It is believed to conquer death and grant immortality."
        },
        
        {
        id: 19,
        title: "Om Shreem Mahalakshmiyei Namaha",
        mantra: "A mantra dedicated to Goddess Lakshmi, the goddess of wealth and prosperity. Chanting this mantra attracts abundance and material blessings."
        },
        
        {
        id: 20,
        title: "Om Asato Ma Sadgamaya, Tamaso Ma Jyotir Gamaya, Mrityor Ma Amritam Gamaya",
        mantra: "Taken from the Brihadaranyaka Upanishad, this mantra means 'Lead me from the unreal to the real, from darkness to light, from death to immortality'. It is a prayer for spiritual guidance and enlightenment."
        },
];

function Mantra() {
  return (
    <div>
            <section className="mantras-section" style={{ backgroundColor: '#ffffff', color: 'black', padding: '50px 0' }}>
                <Container>
                    <h2 className="text-center mb-5 pt-5" style={{fontSize:'60px'}}>Mantras</h2>
                    <div className="mantras-cards">
                        {Mantras.map(mantra => (
                            <Card key={mantra.id} className="mantra-card">
                                <Card.Body>
                                    <Card.Title><strong>{mantra.title}</strong></Card.Title>
                                    <Card.Text style={{fontSize:'17px'}}>{mantra.mantra}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
  )
}

export default Mantra