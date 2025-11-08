---
title: "LSG-BART: Enhancing Medical Document Summarization with LSG Attention"
description: "An enhanced Transformer model for summarizing long medical documents using LSG Attention, addressing the computational challenges of processing extensive medical texts from PubMed and other sources."
image: "../assets/projects/lsg-bart/placeholder.svg"
link: "#"
github: "#"
tags: ["NLP", "Text Summarization", "Transformers"]
featured: true
---

# LSG-BART: Enhancing Medical Document Summarization with LSG Attention

## Project Abstract

This project introduces LSG-BART, an enhanced Transformer model for summarizing long medical documents. It addresses the challenge of processing extensive medical texts (e.g., from PubMed) by combining the robust sequence-to-sequence (Seq2Seq) capabilities of the BART model with the computational efficiency of Local, Sparse, and Global (LSG) Attention. This innovative approach efficiently handles long sequences, reducing computational complexity while maintaining high summarization quality, making it a promising tool for evidence-based medicine and healthcare.

## The Problem: The Computational Cost of Long Documents

Summarizing medical literature is crucial, but these documents are often thousands of words long. Standard Transformer models, like the original BART, are built on a full self-attention mechanism.

The primary limitation of this mechanism is its $O(n^2)$ computational complexity, where 'n' is the sequence length. As the document length increases, the memory and processing power required explode, making it prohibitively expensive and slow to summarize long medical texts.

## The Solution: LSG-BART

Our solution is LSG-BART, a model that replaces the standard, computationally-heavy self-attention in BART's encoder with LSG Attention.

This modification allows the model to efficiently process sequences up to 16,000 tokens and beyond, drastically reducing the computational and memory footprint while maintaining competitive performance. It's an adaptable approach that can be applied to existing pre-trained models, saving significant training costs.

## Core Concepts & Architecture

### BART: The Foundation

BART (Denoising Autoencoder) is a sequence-to-sequence model that combines the best of BERT and GPT:

- **Bidirectional Encoder (like BERT)**: It reads the entire input text at once, allowing it to build a deep understanding of the context
- **Autoregressive Decoder (like GPT)**: It generates the summary token-by-token, making it excellent for high-quality text generation

This architecture makes BART an ideal foundation for abstractive summarization.

### LSG Attention: The Innovation

LSG (Local, Sparse, Global) Attention is a hybrid mechanism designed to approximate full self-attention with far less computation. Instead of every token looking at every other token, it combines three efficient attention patterns:

- **Local Attention**: A sliding-window (like Longformer or Big Bird). Each token only attends to its immediate neighbors (e.g., a fixed-length window). This captures local context
- **Sparse Attention**: Expands the local context by selecting additional "sparse" tokens based on specific rules (e.g., max pooling within blocks). This allows the model to pick up on important words that are further away
- **Global Attention**: A few select tokens (e.g., the [CLS] token) are designated as "global." These tokens can attend to every token in the sequence, and every token can attend back to them. This ensures that critical, high-level information is preserved and communicated across the entire document

### LSG-BART: The Combined Model

LSG-BART is created by integrating the LSG attention mechanism directly into the BART architecture, specifically replacing the full self-attention in its encoder.

This allows the encoder to efficiently process long input sequences (the medical article). The standard decoder remains, allowing it to generate a high-quality, abstractive summary.

This approach is "model-agnostic," meaning we can convert existing BART checkpoints without having to retrain the entire model from scratch.

## Methodology & Implementation

### Dataset: PubMed Summarize

We used the PubMed Summarize dataset, which is ideal for this task due to its long-form content.

- **Training Set**: 120,000 documents
- **Average Input Length**: 3,050 words
- **Average Summary Length**: 202 words

### Model Training & Hyperparameters

The model was fine-tuned on the PubMed dataset using a P100 GPU with 16GB VRAM.

| Hyperparameter | Value |
|---------------|--------|
| Learning Rate | 8e-05 |
| Train Batch Size | 2 |
| Eval Batch Size | 2 |
| Gradient Accumulation Steps | 16 |
| Total Train Batch Size | 32 |
| Optimizer | Adam (betas=(0.9, 0.999), epsilon=1e-08) |
| LR Scheduler Type | Linear |
| LR Scheduler Warmup Steps | 500 |
| Num Epochs | 12 |
| Seed | 42 |

### Evaluation Metrics

Model performance was evaluated using the ROUGE (Recall-Oriented Understudy for Gisting Evaluation) score, which measures the overlap between the generated summary and a human-written reference summary.

- **ROUGE-1**: Overlap of unigrams (single words)
- **ROUGE-2**: Overlap of bigrams (two-word phrases)
- **ROUGE-L**: Overlap based on the Longest Common Subsequence (LCS)

## Results & Performance

LSG-BART demonstrates highly competitive performance against other state-of-the-art long-sequence models.

### Performance on Summarization Tasks (ROUGE Scores)

| Model | R1 | R2 | R-L |
|-------|----|----|-----|
| Pegasus (1K) | 45.49 | 19.90 | 27.69 |
| Big Bird-Peg. (4K) | 46.32 | 20.65 | 42.33 |
| LongT5-Base (4K) | 47.77 | 22.58 | 44.38 |
| **Our LSG-BART (4K)** | **45.16** | **21.74** | **42.03** |
| LongT5-L (16K) | 49.98 | 24.69 | 46.46 |
| **Our LSG-BART (16K)** | **47.18** | **23.42** | **43.60** |

### Key Insights

- Our LSG-BART (4K) model, while having a slightly lower R1 score, achieves a higher R2 score than Big Bird-Pegasus (4K). This suggests it is better at capturing meaningful phrases (bigrams)
- Our LSG-BART (16K) model scales effectively, showing strong results that are competitive with the much larger LongT5-L model
- This confirms that the LSG-BART approach successfully balances computational efficiency with high-quality summarization performance

## Conclusion & Future Directions

### Advantages

- **Efficiency**: Effectively processes long documents by avoiding $O(n^2)$ complexity
- **High Performance**: Achieves competitive ROUGE scores against other SOTA long-sequence models
- **Resource-Optimized**: Can be deployed on systems with more limited computational resources

### Future Work

- **Expand Vocabulary**: Enhance the model with more domain-specific medical terminology
- **Multilingual Models**: Adapt the model to summarize medical documents in multiple languages
- **Enhanced Fact-Checking**: Integrate fact-checking mechanisms to further improve the accuracy and trustworthiness of summaries, which is critical for medical applications