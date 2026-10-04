export type Project = {
  title: string; category: string; description: string; tags: string[];
  repository: string; image?: { src: string; alt: string };
  detail: string;
};
const github = "https://github.com/WilsonTunggala1/";
export const projects: Project[] = [
  {
    title: "Ride-Hailing Streaming Pipeline", category: "Data engineering",
    description: "A Lambda Architecture that turns NYC taxi events into live geospatial demand analytics, with a parallel path to a historical data lake.",
    tags: ["PySpark", "Redpanda", "Redis", "FastAPI", "Docker"],
    repository: github + "Ride-Streaming-Pipeline", detail: "Event-time processing · H3 geospatial indexing",
  },
  {
    title: "Real-Time Fraud Detection", category: "Machine learning · Streaming",
    description: "An event-driven QRIS and e-wallet fraud pipeline, from streaming transactions and CatBoost scoring to a live FraudOps dashboard.",
    tags: ["CatBoost", "Redpanda", "FastAPI", "PostgreSQL"],
    repository: github + "Real-Time-Fraud-Detection", detail: "0.7769 mean PR-AUC · Time-series cross-validation",
  },
  {
    title: "Credit Score Prediction", category: "Cloud · Machine learning",
    description: "An end-to-end credit classification workflow with model comparison, AWS SageMaker deployment, and a Streamlit inference interface.",
    tags: ["AWS SageMaker", "Scikit-learn", "S3", "EC2"],
    repository: github + "AWS-Sagemaker-Credit-Score-Prediction", detail: "Three credit categories · Cloud deployment workflow",
  },
  {
    title: "Placement & Salary Prediction", category: "Machine learning · MLOps",
    description: "A two-stage system that predicts student placement, then estimates salary for placed students, served through FastAPI and Streamlit.",
    tags: ["Python", "FastAPI", "Streamlit", "MLflow"],
    repository: github + "Placement-Salary-Prediction-Deployment", detail: "Classification → Conditional salary regression",
  },
  {
    title: "Bank Term Deposit Prediction", category: "Machine learning · Analytics",
    description: "A classification project that helps prioritize bank marketing outreach through feature engineering, imbalance handling, and model evaluation.",
    tags: ["Python", "XGBoost", "EDA", "Feature engineering"],
    repository: github + "Bank-Term-Deposit-Prediction", detail: "Recall-focused selection · Business-impact estimation",
  },
  {
    title: "Stock Price Prediction with LSTM", category: "Deep learning · Time series",
    description: "A time-series study comparing baseline and stacked LSTM networks to predict closing prices for Alphabet and Intel.",
    tags: ["LSTM", "Deep learning", "Time series", "Python"],
    repository: github + "Stock-Price-Prediction-LSTM", detail: "Baseline vs. stacked LSTM · RMSE, MAE & MAPE",
  },
];
