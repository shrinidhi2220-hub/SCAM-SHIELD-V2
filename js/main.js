function analyzeMessage() {
    let text = document.getElementById("messageInput").value.toLowerCase();

    let score = 0;

    const keywords = [
        "urgent",
        "otp",
        "winner",
        "claim",
        "click here",
        "verify"
    ];

    keywords.forEach(word => {
        if (text.includes(word)) {
            score++;
        }
    });

    let result = document.getElementById("result");

    if (score >= 2) {
        result.innerHTML = "⚠️ Potential Scam - Risk Score: 85%";
    } else {
        result.innerHTML = "✅ Looks Safe";
    }
}
