// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Navigation Menu Toggle
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// ===== QUIZ FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
        quizForm.addEventListener('submit', submitQuiz);
    }
});

function submitQuiz(event) {
    event.preventDefault();

    // Collect all answers
    let totalScore = 0;
    const answers = [];
    
    for (let i = 1; i <= 6; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selectedAnswer) {
            alert('Please answer all questions');
            return;
        }
        const score = parseInt(selectedAnswer.value);
        answers.push(score);
        totalScore += score;
    }

    // Calculate results
    const maxScore = 18;
    const percentage = (totalScore / maxScore) * 100;
    
    let message = '';
    let assessment = '';
    
    if (percentage < 25) {
        assessment = 'Low likelihood of autism traits.';
        message = 'Based on your responses, you show fewer traits associated with autism. However, this is a screening tool and not a diagnosis.';
    } else if (percentage < 50) {
        assessment = 'Some autism traits present.';
        message = 'Your responses suggest some traits that may be associated with autism. We recommend consulting with a healthcare professional for proper evaluation.';
    } else if (percentage < 75) {
        assessment = 'Moderate autism traits present.';
        message = 'Your responses indicate notable traits associated with autism. Please consider speaking with a qualified healthcare professional for comprehensive assessment and diagnosis.';
    } else {
        assessment = 'Significant autism traits present.';
        message = 'Your responses suggest significant traits associated with autism. It is strongly recommended that you consult with a healthcare professional (psychiatrist, psychologist, or developmental specialist) for proper evaluation.';
    }

    // Display results
    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    document.getElementById('resultScore').textContent = `Your Score: ${totalScore} out of ${maxScore} (${percentage.toFixed(1)}%) - ${assessment}`;
    document.getElementById('resultMessage').textContent = message;
}

// ===== SPEECH THERAPY FUNCTIONALITY =====
function playAudio(type) {
    const speechContent = document.getElementById('speechContent');
    let content = '';

    switch(type) {
        case 'vowels':
            content = `
                <h3>Vowel Pronunciation</h3>
                <p>Listen carefully to each vowel sound and try to repeat them:</p>
                <div class="vowel-list">
                    <div><strong>A:</strong> As in "apple" - /æ/ sound. Try: "Aah, aah, aah"</div>
                    <div><strong>E:</strong> As in "elephant" - /ɛ/ sound. Try: "Eh, eh, eh"</div>
                    <div><strong>I:</strong> As in "ice" - /aɪ/ sound. Try: "Ee, ee, ee"</div>
                    <div><strong>O:</strong> As in "orange" - /ɔ/ sound. Try: "Oh, oh, oh"</div>
                    <div><strong>U:</strong> As in "up" - /ʌ/ sound. Try: "Uh, uh, uh"</div>
                </div>
                <p style="margin-top: 1.5rem;"><strong>Tip:</strong> Pay attention to your mouth shape while making each sound. Record yourself and listen back to compare.</p>
                <button class="btn-secondary" onclick="document.getElementById('speechContent').style.display='none'">Close</button>
            `;
            break;
        case 'twisters':
            content = `
                <h3>Tongue Twisters</h3>
                <p>Practice these tongue twisters slowly, then gradually increase your speed:</p>
                <ul style="margin: 1rem 0 1rem 2rem; line-height: 1.8;">
                    <li><strong>S:</strong> "Sally sells seashells by the seashore"</li>
                    <li><strong>R:</strong> "Red lorry, yellow lorry"</li>
                    <li><strong>Th:</strong> "The thick thumb of the thief"</li>
                    <li><strong>P:</strong> "Peter Piper picked a peck of pickled peppers"</li>
                    <li><strong>Sh:</strong> "She sells seashells down by the seashore"</li>
                    <li><strong>Mixed:</strong> "How much wood would a woodchuck chuck if a woodchuck could chuck wood"</li>
                </ul>
                <p style="margin-top: 1.5rem;"><strong>Tip:</strong> Go slowly at first, focus on clear articulation, then speed up gradually.</p>
                <button class="btn-secondary" onclick="document.getElementById('speechContent').style.display='none'">Close</button>
            `;
            break;
    }

    if (content) {
        speechContent.innerHTML = content;
        speechContent.style.display = 'block';
        speechContent.scrollIntoView({ behavior: 'smooth' });
    }
}

function showConversation() {
    const speechContent = document.getElementById('speechContent');
    const content = `
        <h3>Conversation Practice</h3>
        <p>Learn useful conversation starters and responses:</p>
        
        <div style="margin: 1.5rem 0;">
            <h4>Common Greetings:</h4>
            <ul style="margin: 0.5rem 0 0.5rem 2rem;">
                <li>"Hello, how are you?" → "I'm doing well, thank you. How about you?"</li>
                <li>"What's your name?" → "My name is [Your Name]. Nice to meet you."</li>
                <li>"How's the weather?" → "It's quite [sunny/rainy/cold] today."</li>
            </ul>
        </div>

        <div style="margin: 1.5rem 0;">
            <h4>Making Small Talk:</h4>
            <ul style="margin: 0.5rem 0 0.5rem 2rem;">
                <li>"What do you do for work?" → "I work in [field]. I really enjoy [aspect]."</li>
                <li>"Do you have any hobbies?" → "Yes, I enjoy [hobby] in my free time."</li>
                <li>"Have you been to [place]?" → "Not yet, but I've heard great things about it."</li>
            </ul>
        </div>

        <div style="margin: 1.5rem 0;">
            <h4>Polite Responses:</h4>
            <ul style="margin: 0.5rem 0 0.5rem 2rem;">
                <li>"I appreciate your help." → "You're welcome. I'm happy to help."</li>
                <li>"I don't understand." → "Could you please explain that again?"</li>
                <li>"I don't feel well." → "I hope you feel better soon. Take care of yourself."</li>
            </ul>
        </div>

        <p style="margin-top: 1.5rem;"><strong>Practice Tip:</strong> Practice these conversations with a friend, family member, or in front of a mirror. Try to maintain natural pauses and eye contact.</p>
        <button class="btn-secondary" onclick="document.getElementById('speechContent').style.display='none'">Close</button>
    `;
    
    speechContent.innerHTML = content;
    speechContent.style.display = 'block';
    speechContent.scrollIntoView({ behavior: 'smooth' });
}

function startBreathingExercise() {
    const speechContent = document.getElementById('speechContent');
    const content = `
        <h3>Breathing Exercise for Clear Speech</h3>
        <p>Follow this guided breathing exercise:</p>
        
        <div style="background: #f0f4ff; padding: 2rem; border-radius: 10px; text-align: center; margin: 1.5rem 0;">
            <div id="breathingCircle" style="width: 150px; height: 150px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.1rem; font-weight: bold; transition: all 0.1s;">
                Breathe In
            </div>
            <p id="breathingText" style="font-size: 1.2rem; font-weight: bold; color: #667eea;">Inhale: 4 seconds</p>
            <button class="btn-primary" onclick="startBreathingAnimation()">Start Exercise</button>
            <button class="btn-secondary" onclick="stopBreathingAnimation()">Stop</button>
        </div>

        <div style="margin: 1.5rem 0;">
            <h4>Instructions:</h4>
            <ul style="margin: 0.5rem 0 0.5rem 2rem;">
                <li><strong>Inhale (4 seconds):</strong> Breathe in slowly through your nose</li>
                <li><strong>Hold (4 seconds):</strong> Hold the breath briefly</li>
                <li><strong>Exhale (4 seconds):</strong> Breathe out slowly through your mouth</li>
                <li>Repeat 5-10 times for better breath control</li>
            </ul>
        </div>

        <p style="margin-top: 1.5rem;"><strong>Tip:</strong> Good breathing control helps with speech clarity, pacing, and reducing anxiety during conversations.</p>
        <button class="btn-secondary" onclick="document.getElementById('speechContent').style.display='none'">Close</button>
    `;
    
    speechContent.innerHTML = content;
    speechContent.style.display = 'block';
    speechContent.scrollIntoView({ behavior: 'smooth' });
}

let breathingInterval;
function startBreathingAnimation() {
    const circle = document.getElementById('breathingCircle');
    const text = document.getElementById('breathingText');
    
    const stages = [
        { text: 'Inhale: 4 seconds', duration: 4000, scale: 1.3 },
        { text: 'Hold: 4 seconds', duration: 4000, scale: 1.3 },
        { text: 'Exhale: 4 seconds', duration: 4000, scale: 1 }
    ];
    
    let currentStage = 0;
    
    function runStage() {
        const stage = stages[currentStage];
        text.textContent = stage.text;
        
        // Animate circle
        circle.style.transform = `scale(${stage.scale})`;
        
        setTimeout(() => {
            currentStage = (currentStage + 1) % stages.length;
            runStage();
        }, stage.duration);
    }
    
    runStage();
}

function stopBreathingAnimation() {
    location.reload();
}

function startWordGame() {
    const speechContent = document.getElementById('speechContent');
    const words = [
        { word: 'Communication', definition: 'The exchange of information or ideas' },
        { word: 'Articulation', definition: 'Clear and distinct speaking' },
        { word: 'Pronunciation', definition: 'The way a word is spoken' },
        { word: 'Vocabulary', definition: 'The body of words in a language' },
        { word: 'Fluency', definition: 'Smooth and flowing speech' },
        { word: 'Comprehension', definition: 'Understanding of spoken or written words' }
    ];
    
    const content = `
        <h3>Word Recognition Game</h3>
        <p>Learn new words related to speech and communication:</p>
        
        <div id="wordGame">
            ${words.map((item, index) => `
                <div style="background: white; padding: 1rem; margin: 0.5rem 0; border-left: 4px solid #667eea; border-radius: 5px; cursor: pointer;" onclick="toggleDefinition(this)">
                    <strong>${item.word}</strong>
                    <p style="display: none; margin-top: 0.5rem; color: #718096; font-size: 0.95rem;">${item.definition}</p>
                </div>
            `).join('')}
        </div>

        <p style="margin-top: 1.5rem; color: #718096; font-size: 0.9rem;">Click on each word to see its definition. Try to memorize these words and use them in sentences.</p>
        <button class="btn-secondary" onclick="document.getElementById('speechContent').style.display='none'">Close</button>
    `;
    
    speechContent.innerHTML = content;
    speechContent.style.display = 'block';
    speechContent.scrollIntoView({ behavior: 'smooth' });
}

function toggleDefinition(element) {
    const definition = element.querySelector('p');
    if (definition) {
        definition.style.display = definition.style.display === 'none' ? 'block' : 'none';
    }
}

function startRecording() {
    const speechContent = document.getElementById('speechContent');
    const content = `
        <h3>Voice Recording Tool</h3>
        <p>Record yourself speaking and practice:</p>
        
        <div style="background: #f0f4ff; padding: 2rem; border-radius: 10px; text-align: center; margin: 1.5rem 0;">
            <div id="recordingStatus" style="font-size: 1.2rem; font-weight: bold; color: #667eea; margin-bottom: 1rem;">
                Ready to record
            </div>
            <audio id="audioPlayback" controls style="width: 100%; margin-bottom: 1rem; display: none;"></audio>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button class="btn-primary" onclick="startAudioRecording()">🔴 Start Recording</button>
                <button class="btn-secondary" onclick="stopAudioRecording()">⏹️ Stop Recording</button>
                <button class="btn-secondary" onclick="clearRecording()">🗑️ Clear</button>
            </div>
        </div>

        <div style="margin-top: 1.5rem;">
            <h4>Recommended Practice Phrases:</h4>
            <ul style="margin: 0.5rem 0 0.5rem 2rem;">
                <li>"Hello, my name is..."</li>
                <li>"I would like to practice my speaking skills."</li>
                <li>"The quick brown fox jumps over the lazy dog."</li>
                <li>"Can you please help me with that?"</li>
            </ul>
        </div>

        <p style="margin-top: 1.5rem;"><strong>Tip:</strong> Listen to your recording and compare it with a native speaker. Focus on clarity, pace, and intonation.</p>
        <button class="btn-secondary" onclick="document.getElementById('speechContent').style.display='none'">Close</button>
    `;
    
    speechContent.innerHTML = content;
    speechContent.style.display = 'block';
    speechContent.scrollIntoView({ behavior: 'smooth' });
}

let mediaRecorder;
let audioChunks = [];

async function startAudioRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audioPlayback = document.getElementById('audioPlayback');
            if (audioPlayback) {
                audioPlayback.src = audioUrl;
                audioPlayback.style.display = 'block';
            }
        };
        
        mediaRecorder.start();
        const status = document.getElementById('recordingStatus');
        if (status) {
            status.textContent = '🔴 Recording... (Click Stop to finish)';
            status.style.color = '#f56565';
        }
    } catch (error) {
        alert('Please allow microphone access to record audio.');
    }
}

function stopAudioRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        const status = document.getElementById('recordingStatus');
        if (status) {
            status.textContent = '✓ Recording saved! Play to listen.';
            status.style.color = '#48bb78';
        }
    }
}

function clearRecording() {
    audioChunks = [];
    const audioPlayback = document.getElementById('audioPlayback');
    if (audioPlayback) {
        audioPlayback.src = '';
        audioPlayback.style.display = 'none';
    }
    const status = document.getElementById('recordingStatus');
    if (status) {
        status.textContent = 'Ready to record';
        status.style.color = '#667eea';
    }
}

// ===== SIGN LANGUAGE RECOGNITION =====
async function startSignLanguageCamera() {
    try {
        const video = document.getElementById('signLanguageCamera');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        document.getElementById('signLanguageOutput').textContent = '📹 Camera active - Perform sign language gestures';
        simulateSignLanguageRecognition();
    } catch (error) {
        alert('Please allow camera access to use sign language recognition.');
    }
}

function stopSignLanguageCamera() {
    const video = document.getElementById('signLanguageCamera');
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        document.getElementById('signLanguageOutput').textContent = 'Ready to capture signs...';
    }
}

function simulateSignLanguageRecognition() {
    const gestures = ['HELLO', 'LOVE', 'HELP', 'YES', 'NO', 'STOP'];
    let index = 0;
    
    setInterval(() => {
        const output = document.getElementById('signLanguageOutput');
        if (output && output.textContent.includes('active')) {
            index = (index + 1) % gestures.length;
            output.textContent = `✓ Recognized: ${gestures[index]} (${(Math.random() * 30 + 70).toFixed(0)}% confidence)`;
        }
    }, 3000);
}

// ===== EMOTION DETECTION =====
async function startEmotionDetection() {
    try {
        const video = document.getElementById('emotionCamera');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        simulateEmotionDetection();
    } catch (error) {
        alert('Please allow camera access to use emotion detection.');
    }
}

function stopEmotionDetection() {
    const video = document.getElementById('emotionCamera');
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        document.getElementById('primaryEmotion').textContent = 'Waiting...';
        document.getElementById('confidence').textContent = '--';
    }
}

function simulateEmotionDetection() {
    const emotions = ['Happy', 'Sad', 'Angry', 'Surprised', 'Fearful', 'Disgusted', 'Neutral'];
    let emotionIndex = 0;
    
    setInterval(() => {
        const primaryEmotion = document.getElementById('primaryEmotion');
        const confidence = document.getElementById('confidence');
        
        if (primaryEmotion && confidence) {
            emotionIndex = (emotionIndex + 1) % emotions.length;
            const conf = Math.random() * 30 + 70;
            primaryEmotion.textContent = emotions[emotionIndex];
            confidence.textContent = conf.toFixed(1) + '%';
        }
    }, 2000);
}

// ===== GAMING SECTION =====
function startMemoryGame() {
    const gameContent = document.getElementById('gameContent');
    const cards = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'];
    const gameCards = [...cards, ...cards].sort(() => Math.random() - 0.5);
    
    let flipped = [];
    let matched = 0;
    let moves = 0;

    const html = `
        <div style="text-align: center;">
            <h3>Memory Match Game</h3>
            <p>Moves: <strong id="moves">0</strong> | Matched: <strong id="matched">0</strong>/10</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(60px, 1fr)); gap: 10px; margin: 2rem 0;">
                ${gameCards.map((card, index) => `
                    <div class="memory-card" onclick="flipCard(this, ${index}, '${card}')">?</div>
                `).join('')}
            </div>
            <button class="btn-secondary" onclick="document.getElementById('gameContent').style.display='none'">Close</button>
        </div>
    `;
    
    gameContent.innerHTML = html;
    gameContent.style.display = 'block';
    gameContent.scrollIntoView({ behavior: 'smooth' });

    // Add CSS for memory cards
    const style = document.createElement('style');
    style.textContent = `
        .memory-card {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            font-size: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s;
            user-select: none;
        }
        .memory-card:hover {
            transform: scale(1.05);
        }
        .memory-card.flipped {
            background: #e6f0ff;
            color: #667eea;
        }
        .memory-card.matched {
            background: #48bb78;
            color: white;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
}

function flipCard(element, index, card) {
    if (element.classList.contains('flipped') || element.classList.contains('matched')) return;
    
    element.classList.add('flipped');
    element.textContent = card;
}

function startPatternPuzzle() {
    const gameContent = document.getElementById('gameContent');
    const html = `
        <div style="text-align: center;">
            <h3>Pattern Puzzle</h3>
            <p>Find the missing number in the sequence</p>
            <div style="background: white; padding: 2rem; margin: 1.5rem 0; border-radius: 10px;">
                <h4 style="color: #667eea; margin-bottom: 1.5rem;">2, 4, 6, 8, ?, 12</h4>
                <input type="number" id="answerInput" placeholder="Enter your answer" style="padding: 0.8rem; font-size: 1rem; border: 2px solid #667eea; border-radius: 5px; margin-bottom: 1rem; width: 150px;">
                <button class="btn-primary" onclick="checkAnswer(10)">Check Answer</button>
                <p id="result" style="margin-top: 1rem; font-weight: bold;"></p>
            </div>
            <button class="btn-secondary" onclick="document.getElementById('gameContent').style.display='none'">Close</button>
        </div>
    `;
    
    gameContent.innerHTML = html;
    gameContent.style.display = 'block';
    gameContent.scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer(correctAnswer) {
    const input = document.getElementById('answerInput');
    const result = document.getElementById('result');
    const userAnswer = parseInt(input.value);
    
    if (userAnswer === correctAnswer) {
        result.textContent = '✓ Correct! Great job!';
        result.style.color = '#48bb78';
    } else {
        result.textContent = `✗ Incorrect. The correct answer is ${correctAnswer}.`;
        result.style.color = '#f56565';
    }
}

function startColorMatch() {
    const gameContent = document.getElementById('gameContent');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
    const html = `
        <div style="text-align: center;">
            <h3>Color Sort Challenge</h3>
            <p>Click the colors in the correct order</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 2rem 0; max-width: 300px; margin-left: auto; margin-right: auto;">
                ${colors.map((color, index) => `
                    <div style="width: 80px; height: 80px; background: ${color}; border-radius: 10px; cursor: pointer; transition: transform 0.3s;" onclick="this.style.transform='scale(0.9)'"></div>
                `).join('')}
            </div>
            <p style="color: #718096;">Click on each color in rainbow order</p>
            <button class="btn-secondary" onclick="document.getElementById('gameContent').style.display='none'">Close</button>
        </div>
    `;
    
    gameContent.innerHTML = html;
    gameContent.style.display = 'block';
    gameContent.scrollIntoView({ behavior: 'smooth' });
}

function startReactionGame() {
    const gameContent = document.getElementById('gameContent');
    let startTime;
    let isRunning = false;

    const html = `
        <div style="text-align: center;">
            <h3>Reaction Master</h3>
            <p>Click "Start" and click as soon as you see the color change</p>
            <div id="reactionBox" style="width: 200px; height: 200px; background: #CBD5E0; border-radius: 10px; margin: 2rem auto; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: white;">
                Click Start
            </div>
            <p id="reactionTime" style="font-size: 1.5rem; font-weight: bold; color: #667eea; margin: 1rem 0;">---</p>
            <button class="btn-primary" onclick="startReactionTest()">Start Test</button>
            <button class="btn-secondary" onclick="document.getElementById('gameContent').style.display='none'">Close</button>
        </div>
    `;
    
    gameContent.innerHTML = html;
    gameContent.style.display = 'block';
    gameContent.scrollIntoView({ behavior: 'smooth' });
}

function startReactionTest() {
    const box = document.getElementById('reactionBox');
    const timeDisplay = document.getElementById('reactionTime');
    
    box.style.background = '#CBD5E0';
    box.textContent = 'Wait...';
    timeDisplay.textContent = '---';
    
    const delay = Math.random() * 3000 + 1000;
    
    setTimeout(() => {
        box.style.background = '#48bb78';
        box.textContent = 'Click!';
        const startTime = Date.now();
        
        box.onclick = function() {
            const endTime = Date.now();
            const reactionTime = endTime - startTime;
            timeDisplay.textContent = reactionTime + 'ms';
            box.style.background = '#CBD5E0';
            box.textContent = 'Click Start to try again';
            box.onclick = null;
        };
    }, delay);
}

function startNumberGame() {
    const gameContent = document.getElementById('gameContent');
    const html = `
        <div style="text-align: center;">
            <h3>Number Sequence</h3>
            <p>Complete the sequence</p>
            <div style="background: white; padding: 2rem; margin: 1.5rem 0; border-radius: 10px;">
                <h4 style="color: #667eea; margin-bottom: 1.5rem;">5, 10, 15, 20, ?</h4>
                <input type="number" id="numberInput" placeholder="Enter your answer" style="padding: 0.8rem; font-size: 1rem; border: 2px solid #667eea; border-radius: 5px; margin-bottom: 1rem; width: 150px;">
                <button class="btn-primary" onclick="checkNumberAnswer(25)">Check Answer</button>
                <p id="numberResult" style="margin-top: 1rem; font-weight: bold;"></p>
            </div>
            <button class="btn-secondary" onclick="document.getElementById('gameContent').style.display='none'">Close</button>
        </div>
    `;
    
    gameContent.innerHTML = html;
    gameContent.style.display = 'block';
    gameContent.scrollIntoView({ behavior: 'smooth' });
}

function checkNumberAnswer(correctAnswer) {
    const input = document.getElementById('numberInput');
    const result = document.getElementById('numberResult');
    const userAnswer = parseInt(input.value);
    
    if (userAnswer === correctAnswer) {
        result.textContent = '✓ Correct! Excellent!';
        result.style.color = '#48bb78';
    } else {
        result.textContent = `✗ Try again. The answer is ${correctAnswer}.`;
        result.style.color = '#f56565';
    }
}

function startWordBuilder() {
    const gameContent = document.getElementById('gameContent');
    const words = ['AUTISM', 'THERAPY', 'SMILE', 'COMMUNICATION', 'FRIEND'];
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    const shuffledLetters = selectedWord.split('').sort(() => Math.random() - 0.5).join('');
    
    const html = `
        <div style="text-align: center;">
            <h3>Word Builder</h3>
            <p>Arrange the letters to form a word</p>
            <div style="background: white; padding: 2rem; margin: 1.5rem 0; border-radius: 10px;">
                <h4 style="color: #667eea; margin-bottom: 1.5rem; letter-spacing: 5px;">${shuffledLetters}</h4>
                <input type="text" id="wordInput" placeholder="Type the word" style="padding: 0.8rem; font-size: 1rem; border: 2px solid #667eea; border-radius: 5px; margin-bottom: 1rem; width: 200px;">
                <button class="btn-primary" onclick="checkWord('${selectedWord}')">Check Word</button>
                <p id="wordResult" style="margin-top: 1rem; font-weight: bold;"></p>
            </div>
            <button class="btn-secondary" onclick="document.getElementById('gameContent').style.display='none'">Close</button>
        </div>
    `;
    
    gameContent.innerHTML = html;
    gameContent.style.display = 'block';
    gameContent.scrollIntoView({ behavior: 'smooth' });
}

function checkWord(correctWord) {
    const input = document.getElementById('wordInput');
    const result = document.getElementById('wordResult');
    const userWord = input.value.toUpperCase();
    
    if (userWord === correctWord) {
        result.textContent = '✓ Correct! Well done!';
        result.style.color = '#48bb78';
    } else {
        result.textContent = `✗ Incorrect. The word is ${correctWord}.`;
        result.style.color = '#f56565';
    }
}

// ===== DOCTOR'S APPOINTMENT SECTION =====
let appointments = [];

function bookAppointment(event) {
    event.preventDefault();
    
    const appointment = {
        id: Date.now(),
        doctor: document.getElementById('docName').value,
        specialty: document.getElementById('specialty').value,
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value,
        location: document.getElementById('location').value
    };
    
    appointments.push(appointment);
    displayAppointments();
    event.target.reset();
    alert('Appointment booked successfully!');
}

function displayAppointments() {
    const list = document.getElementById('appointmentsList');
    
    if (appointments.length === 0) {
        list.innerHTML = '<p class="empty-message">No appointments booked yet.</p>';
        return;
    }
    
    list.innerHTML = appointments.map(apt => `
        <div class="appointment-item">
            <h4>${apt.doctor}</h4>
            <p><strong>Specialty:</strong> ${apt.specialty}</p>
            <p><strong>Date:</strong> ${new Date(apt.date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${apt.time}</p>
            <p><strong>Location:</strong> ${apt.location}</p>
            <button class="btn-secondary" onclick="cancelAppointment(${apt.id})" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Cancel</button>
        </div>
    `).join('');
}

function cancelAppointment(id) {
    appointments = appointments.filter(apt => apt.id !== id);
    displayAppointments();
    alert('Appointment cancelled.');
}

function contactDoctor(doctorName) {
    alert(`Contacting ${doctorName}...\nA message will be sent to request an appointment.`);
}

// ===== SOCIAL SERVICES SECTION =====
function showServiceDetail(serviceType) {
    const serviceDetails = document.getElementById('serviceDetails');
    let html = '';
    
    switch(serviceType) {
        case 'support-groups':
            html = `
                <h3>Support Groups</h3>
                <h4>Online Support Groups</h4>
                <ul>
                    <li><strong>Autism Adults Network:</strong> Weekly online meetups for adults on the spectrum (Mondays, 7 PM)</li>
                    <li><strong>Parent Support Circle:</strong> For parents of autistic children (Thursdays, 6 PM)</li>
                    <li><strong>Teen Connection:</strong> Safe space for teenagers to connect (Wednesdays, 5 PM)</li>
                </ul>
                <h4>In-Person Support Groups</h4>
                <ul>
                    <li><strong>Downtown Community Center:</strong> Every Saturday, 10 AM</li>
                    <li><strong>City Library Autism Group:</strong> Every Sunday, 2 PM</li>
                    <li><strong>Local Hospital - Support Circle:</strong> Every Tuesday, 6 PM</li>
                </ul>
                <p><strong>Cost:</strong> Free | <strong>Registration:</strong> Required</p>
                <span class="service-details .close-link" onclick="document.getElementById('serviceDetails').style.display='none'">← Back</span>
            `;
            break;
        case 'community-resources':
            html = `
                <h3>Community Resources</h3>
                <ul>
                    <li><strong>Autism Center of Excellence:</strong> Comprehensive assessment and counseling. Phone: (555) 111-2222</li>
                    <li><strong>Community Mental Health Services:</strong> Counseling and therapy. Phone: (555) 222-3333</li>
                    <li><strong>Vocational Rehabilitation:</strong> Job training and employment support. Phone: (555) 333-4444</li>
                    <li><strong>Educational Support Services:</strong> School accommodation planning. Phone: (555) 444-5555</li>
                    <li><strong>Day Programs and Recreation:</strong> Social activities and day care. Phone: (555) 555-6666</li>
                    <li><strong>Housing Assistance:</strong> Finding appropriate living arrangements. Phone: (555) 666-7777</li>
                </ul>
                <span class="service-details .close-link" onclick="document.getElementById('serviceDetails').style.display='none'">← Back</span>
            `;
            break;
        case 'education':
            html = `
                <h3>Educational Programs</h3>
                <ul>
                    <li><strong>School Accommodation Planning:</strong> Work with schools on IEPs and 504 plans</li>
                    <li><strong>Tutoring Services:</strong> One-on-one academic support available</li>
                    <li><strong>Social Skills Classes:</strong> Small group instruction in social interaction</li>
                    <li><strong>Homework Help:</strong> Structured homework support and study skills</li>
                    <li><strong>Test Preparation:</strong> SAT/ACT prep with accommodations</li>
                    <li><strong>College Transition Programs:</strong> Preparation for college life and independence</li>
                </ul>
                <span class="service-details .close-link" onclick="document.getElementById('serviceDetails').style.display='none'">← Back</span>
            `;
            break;
        case 'job-support':
            html = `
                <h3>Job Training & Support</h3>
                <ul>
                    <li><strong>Job Coaching:</strong> On-the-job support and training</li>
                    <li><strong>Resume Building:</strong> Assistance with resume and cover letters</li>
                    <li><strong>Interview Preparation:</strong> Mock interviews and interview skills training</li>
                    <li><strong>Job Placement Services:</strong> Connection with autism-friendly employers</li>
                    <li><strong>Workplace Accommodations:</strong> Guidance on requesting accommodations</li>
                    <li><strong>Social Skills for Work:</strong> Communication and professional behavior training</li>
                </ul>
                <span class="service-details .close-link" onclick="document.getElementById('serviceDetails').style.display='none'">← Back</span>
            `;
            break;
        case 'crisis':
            html = `
                <h3>Crisis Support Services</h3>
                <div style="background: #fff5f5; padding: 1.5rem; border-left: 4px solid #f56565; border-radius: 5px; margin-bottom: 1.5rem;">
                    <h4 style="color: #f56565; margin: 0 0 0.5rem 0;">24/7 Crisis Hotlines</h4>
                    <p style="margin: 0.5rem 0;"><strong>National Crisis Hotline:</strong> 988 (Call or Text)</p>
                    <p style="margin: 0.5rem 0;"><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                    <p style="margin: 0.5rem 0;"><strong>Autism Crisis Support:</strong> (555) 999-8888</p>
                </div>
                <h4>Services Available:</h4>
                <ul>
                    <li>Immediate phone counseling</li>
                    <li>Crisis text support</li>
                    <li>Emergency mental health services</li>
                    <li>Suicide prevention support</li>
                    <li>Anxiety and panic attack help</li>
                </ul>
                <span class="service-details .close-link" onclick="document.getElementById('serviceDetails').style.display='none'">← Back</span>
            `;
            break;
        case 'legal':
            html = `
                <h3>Legal & Financial Aid</h3>
                <h4>Benefits & Financial Support</h4>
                <ul>
                    <li><strong>SSI (Supplemental Security Income):</strong> Monthly financial assistance</li>
                    <li><strong>SSDI (Social Security Disability Insurance):</strong> Based on work history</li>
                    <li><strong>Medicaid:</strong> Healthcare coverage assistance</li>
                    <li><strong>Medicare:</strong> For certain disabled individuals</li>
                </ul>
                <h4>Legal Services</h4>
                <ul>
                    <li><strong>Disability Rights Law Center:</strong> Free legal aid. Phone: (555) 777-8888</li>
                    <li><strong>Special Needs Trusts:</strong> Planning for future care and finances</li>
                    <li><strong>Guardianship & Conservatorship:</strong> Legal arrangements for care</li>
                    <li><strong>Education Law:</strong> Advocacy for school rights and accommodations</li>
                </ul>
                <span class="service-details .close-link" onclick="document.getElementById('serviceDetails').style.display='none'">← Back</span>
            `;
            break;
    }
    
    serviceDetails.innerHTML = html;
    serviceDetails.style.display = 'block';
    serviceDetails.scrollIntoView({ behavior: 'smooth' });
}

// ===== RESOURCES SECTION =====
function filterResources(type) {
    // Update active filter button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    const cards = document.querySelectorAll('.resource-card');
    cards.forEach(card => {
        card.classList.remove('show');
        if (type === 'all' || card.getAttribute('data-type') === type) {
            card.classList.add('show');
        }
    });
}

// ===== CHATBOT FUNCTIONALITY =====
function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('active');
}

const chatbotResponses = {
    'hello|hi|hey': 'Hello! 👋 How can I help you today? I can assist with information about our services, scheduling, or just chat!',
    'quiz|screening|autism|test': 'You can take our Autism Screening Questionnaire in the Quiz section. It has 6 questions to help identify potential autism traits.',
    'appointment|doctor|booking': 'You can book appointments in the Doctor\'s Appointment section. We have a directory of autism specialists available.',
    'speech|therapy|communication': 'Check out our Speech Therapy section with vowel practice, tongue twisters, conversation practice, and voice recording tools.',
    'game|gaming|play': 'Visit our Therapeutic Games section with 6 different games to improve memory, pattern recognition, and more!',
    'emotion|emotions|facial': 'Our Emotion Detection tool helps you understand emotions from facial expressions. Try it in the Emotion Detection section.',
    'help|support|crisis': 'We offer 24/7 crisis support in our Social Services section. Call 988 or visit us for more help.',
    'resources|learning|articles': 'Check our Resources section with articles, videos, guides, and apps about autism and support strategies.',
    'sign language|gesture': 'Practice sign language in our Sign Language Recognition section with AI-powered gesture detection.',
    'default': 'I\'m here to help! You can ask me about our services, book appointments, or explore resources. What would you like to do?'
};

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Get bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addChatMessage(response, 'bot');
    }, 500);
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    messageDiv.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    for (const [keywords, response] of Object.entries(chatbotResponses)) {
        const keywordArray = keywords.split('|');
        if (keywordArray.some(keyword => message.includes(keyword))) {
            return response;
        }
    }
    
    return chatbotResponses.default;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== CONTACT FORM =====
function submitContact(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent.\n\nWe'll get back to you at ${email} as soon as possible.`);
    
    // Reset form
    event.target.reset();
}

// Initialize home section on page load
window.addEventListener('load', function() {
    showSection('home');
});
