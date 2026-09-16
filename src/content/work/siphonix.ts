// src/content/work/siphonix.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'siphonix',
  title: 'Siphonix — Universal Terminal Media Downloader',
  date: '2026-08-25',
  category: 'work',
  type: 'project',
  uid: 'CPP-PRJ-2026-SIPHONIX',

  summary: 'A high-performance universal terminal media extraction engine written in Rust — featuring asynchronous stream multiplexing, native QuickTime/Apple Silicon H.264/AAC compatibility, SQLite WAL download provenance, and zero-orphan process isolation.',

  dependencies: [
    'Rust (Tokio Async)',
    'FFmpeg & yt-dlp',
    'SQLite (WAL Mode)',
    'H.264 & 320k AAC Multiplexing',
    'Clap & Inquire TUI',
    'Subprocess Isolation'
  ],

  blocks: [
    // BANNER / ASCII HERO
    {
      type: 'code',
      language: 'text',
      code: `  ███████╗██╗██████╗ ██╗  ██╗ ██████╗ ███╗   ██╗██╗██╗  ██╗
  ██╔════╝██║██╔══██╗██║  ██║██╔═══██╗████╗  ██║██║╚██╗██╔╝
  ███████╗██║██████╔╝███████║██║   ██║██╔██╗ ██║██║ ╚███╔╝ 
  ╚════██║██║██╔═══╝ ██╔══██║██║   ██║██║╚██╗██║██║ ██╔██╗ 
  ███████║██║██║     ██║  ██║╚██████╔╝██║ ╚████║██║██╔╝ ██╗
  ╚══════╝╚═╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝
  Siphonix v0.1.0 — Universal Terminal Media Extraction Engine`
    },

    // OPENING
    {
      type: 'paragraph',
      content: 'Downloading online media should be effortless, fast, and completely reliable. Yet the modern media extraction ecosystem is riddled with compromises: ad-infested web converters, bloated Electron wrappers, or raw command-line tools that dump non-standard video streams incompatible with native hardware players.'
    },

    {
      type: 'highlight',
      content: 'Engineered for zero-compromise media extraction: raw terminal speed, studio-grade 320 kbps audio, and 100% native hardware playback compatibility out of the box.'
    },

    // METRICS DATA BLOCK
    {
      type: 'data',
      metrics: [
        { label: 'Language', value: 'Rust 1.80+ (2021 Edition)' },
        { label: 'Async Engine', value: 'Tokio Multi-Thread' },
        { label: 'Codec Pipeline', value: 'H.264 (avc1) + 320k AAC' },
        { label: 'Audit Store', value: 'SQLite (WAL Mode)' }
      ]
    },

    // THE COMPATIBILITY DILEMMA
    {
      type: 'heading',
      level: 2,
      content: 'The Compatibility Bottleneck: Why Downloads Fail to Play'
    },
    {
      type: 'paragraph',
      content: 'Modern streaming platforms optimize for their own bandwidth consumption rather than user hardware compatibility. Default downloads often fetch Google’s VP9 or AV01 video containers paired with Opus audio streams. On Apple platforms — macOS QuickTime Player, iPadOS, iOS Photos, and Final Cut Pro — or default Windows Media Player, these files refuse to play without third-party tools like VLC.'
    },
    {
      type: 'paragraph',
      content: 'Siphonix resolves this fundamentally at the multiplexing stage. Every MP4 video stream extracted by Siphonix is passed through an automated FFmpeg transcode filter that enforces <strong>H.264 (<code>avc1</code>)</strong> video encoding paired with <strong>320 kbps AAC (<code>mp4a</code>)</strong> audio. This guarantees that files play natively with hardware-accelerated decoding across Apple Silicon, Windows, and Linux with zero lag or missing tracks.'
    },

    // CORE ARCHITECTURAL CAPABILITIES
    {
      type: 'heading',
      level: 2,
      content: 'Core System Capabilities'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>Universal Native Playback:</strong> Automatic multiplexing into high-bitrate H.264 and 320 kbps AAC ensures universal compatibility with QuickTime, mobile camera rolls, and desktop editing suites.',
        '<strong>Studio-Quality Audio Extraction:</strong> Direct stream-ripping into pristine 320 kbps MP3 or lossless 24-bit FLAC from the highest available source audio streams (ba/b), complete with embedded ID3 metadata tags and album cover art.',
        '<strong>Dual Interaction Modes:</strong> Operates as a distraction-free 4-step interactive terminal wizard (navigated with number keys 1–7 via inquire) or as a scriptable headless CLI driven by clap.',
        '<strong>Real-Time Streaming Diagnostics:</strong> Asynchronous regex parsers stream live progress bars (indicatif) displaying download percentages, network throughput (MiB/s), and ETA countdowns.',
        '<strong>Download Provenance via SQLite:</strong> Embedded SQLite database using Write-Ahead Logging (WAL) tracks all downloads, original source URLs, local paths, and file integrity hashes (siphonix --history).',
        '<strong>Zero-Orphan Process Isolation:</strong> Subprocesses (yt-dlp, FFmpeg) are encapsulated with kill_on_drop(true). On SIGINT (Ctrl+C), active child processes are immediately reaped and partial .part/.ytdl staging files are cleaned up from disk.'
      ]
    },

    // ARCHITECTURE FLOW
    {
      type: 'heading',
      level: 2,
      content: 'Execution Pipeline & Subprocess Architecture'
    },
    {
      type: 'code',
      language: 'text',
      code: `[CLI Arguments / Interactive TUI Wizard]
                 │
                 ▼
[URL Extraction & Metadata Probe (yt-dlp JSON)]
                 │
                 ▼
[Format Resolver & Codec Matrix Selection]
       ├─ Video: MP4 (H.264 avc1 + 320k AAC mp4a) / MKV
       └─ Audio: MP3 (320 kbps CBR) / FLAC (Lossless Studio)
                 │
                 ▼
[Asynchronous Download Worker (Tokio Subprocess)]
       ├─ Real-Time Stream Parser (indicatif TUI)
       └─ Process Supervisor (kill_on_drop & SIGINT Handler)
                 │
                 ▼
[FFmpeg Multiplexing, Codec Conversion & Metadata Tagging]
                 │
                 ▼
[SQLite WAL Audit Ledger + Desktop Revealer (opener)]`
    },

    // DIRECT CLI AUTOMATION
    {
      type: 'heading',
      level: 2,
      content: 'Direct CLI Commands & Scripting'
    },
    {
      type: 'paragraph',
      content: 'Beyond the interactive wizard, Siphonix provides a full suite of direct flags for power users, terminal keybindings, and automated cron pipelines:'
    },
    {
      type: 'code',
      language: 'bash',
      code: `# Download MP4 Video in 1080p Full HD (Universal QuickTime Playback)
siphonix "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -m video -f MP4 -q 1080p

# Download MP4 Video in 4K (2160p Ultra HD)
siphonix "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -m video -f MP4 -q 2160p

# Download Studio-Grade 320 kbps MP3 with Embedded Cover Art
siphonix "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -m audio -f MP3 -q 320k

# Download Lossless 24-Bit FLAC Audio
siphonix "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -m audio -f FLAC

# Inspect Download History and Verified Provenance
siphonix --history

# Verify Underlying Engine Diagnostics (yt-dlp and FFmpeg)
siphonix --diagnostics`
    },

    // TECHNICAL REFLECTIONS
    {
      type: 'heading',
      level: 2,
      content: 'Engineering Reflections & Repository'
    },
    {
      type: 'paragraph',
      content: 'Building Siphonix in Rust underscored the power of fearless concurrency and memory safety in systems tooling. By offloading resource-heavy extraction to managed subprocesses while maintaining strict ownership of process lifecycles and signal interrupts, Siphonix delivers a resilient, high-speed terminal experience that never panics or leaves orphaned background workers.'
    },
    {
      type: 'paragraph',
      content: 'The open-source repository, full documentation, and cross-platform installation scripts are published on GitHub: <a href="https://github.com/cp099/Siphonix" target="_blank" rel="noopener noreferrer" class="text-cyan underline hover:text-cyan-bright font-medium">github.com/cp099/Siphonix</a>.'
    }
  ]
};
