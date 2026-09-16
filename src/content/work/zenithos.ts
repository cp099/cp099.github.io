// src/content/work/zenithos.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'zenithos',
  title: 'ZenithOS — 32-Bit Bare-Metal Operating System',
  date: '2026-07-03',
  category: 'work',
  type: 'major-build',
  uid: 'CPP-BLD-2026-ZENITHOS',

  summary: 'A custom 32-bit x86 bare-metal operating system built from scratch in C and Assembly — featuring a high-resolution VESA anti-aliased graphics engine, hardware-enforced Ring 0 to Ring 3 privilege sandboxing, CR3 virtual memory isolation, a 100Hz preemptive scheduler, and a custom disk filesystem (ZenithFS).',

  dependencies: [
    'x86 Assembly & C',
    'VESA VBE Graphics (1280x1024)',
    'Hardware Paging (CR3)',
    'Ring 0 / Ring 3 Sandboxing',
    'Preemptive Scheduler (100Hz)',
    'ZenithFS & ATA Driver'
  ],

  blocks: [
    // HERO BANNER
    {
      type: 'image',
      src: '/assets/Work/ZenithOS/banner.webp',
      alt: 'Zenith OS Banner',
      caption: 'ZenithOS — Custom 32-Bit Bare-Metal Operating System Architecture'
    },

    // OPENING
    {
      type: 'paragraph',
      content: 'Building an operating system from bare metal is the definitive trial of systems engineering. Without an underlying Linux kernel, standard C library, or runtime environment to rely on, every single byte on screen, every CPU interrupt, and every virtual memory address translation must be calculated and controlled directly by your code.'
    },

    {
      type: 'highlight',
      content: 'From raw x86 assembly and multi-stage bootloaders to a custom VESA graphics engine, preemptive task scheduler, and hardware-enforced Ring 0 vs Ring 3 memory sandboxing — ZenithOS proves that low-level computing can be secure, robust, and aesthetically beautiful.'
    },

    // METRICS DATA BLOCK
    {
      type: 'data',
      metrics: [
        { label: 'Architecture', value: '32-Bit x86 Protected' },
        { label: 'Display Engine', value: 'VESA 1280x1024 (24-bit)' },
        { label: 'Preemption Core', value: '100Hz PIT Timer' },
        { label: 'Security Model', value: 'CR3 Hardware Sandboxing' }
      ]
    },

    // CONTEXT & PHILOSOPHY
    {
      type: 'heading',
      level: 2,
      content: 'The Bare-Metal Imperative: Computing From First Principles'
    },
    {
      type: 'paragraph',
      content: 'Modern software engineering is insulated by countless layers of abstraction: virtual machines, container runtimes, garbage collectors, and operating system kernels. While these layers provide productivity, they obscure the physical realities of hardware execution. ZenithOS was engineered to pull back every curtain — interfacing directly with CPU control registers, programming the 8259 Programmable Interrupt Controller (PIC), and constructing filesystems down to raw 512-byte magnetic disk sectors.'
    },
    {
      type: 'paragraph',
      content: 'Rather than building another clone of a monochrome UNIX terminal, ZenithOS was designed around three non-negotiable architectural tenets: <strong>Aesthetic Computing</strong> (a warm-beige visual identity), <strong>Memory Sandboxing</strong> (strict isolation of unprivileged userland code), and <strong>Defensive Security</strong> (hardware-seeded stack canaries and validated syscall boundaries).'
    },

    // BOOT SEQUENCE & MULTI-STAGE LOADER
    {
      type: 'heading',
      level: 2,
      content: 'Boot Sequence & Protected Mode Transition'
    },
    {
      type: 'paragraph',
      content: 'When an x86 machine powers on, the CPU initializes in 16-bit Real Mode — an execution environment dating back to the Intel 8086 with access to only 1MB of memory and zero hardware protection. ZenithOS bootstraps the machine through a disciplined two-stage sequence:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>Stage 1 MBR (boot/stage1.asm):</strong> Fits strictly within the 512-byte Master Boot Record of Sector 1. It resets the floppy disk controller, registers drive geometry, loads the 15-sector Stage 2 loader into RAM at 0x7E00, and transfers execution.',
        '<strong>A20 Gate Activation:</strong> Stage 2 pulses the keyboard controller output port to enable the A20 address line, preventing memory wrap-around at the 1MB boundary.',
        '<strong>VESA VBE Mode 0x411B Initialization:</strong> While still in 16-bit mode, the loader executes VESA BIOS Interrupt 0x10 to configure a 1280x1024 linear framebuffer with 24-bit TrueColor RGB, writing video geometry pointers to memory block 0x7000.',
        '<strong>Protected Mode Switch:</strong> Loads the Global Descriptor Table (GDT), asserts the PE (Protection Enable) bit in Control Register 0 (CR0), performs an assembly far jump to flush the CPU pipeline, and enters 32-bit Protected Mode.',
        '<strong>Kernel Handover:</strong> Copies the compiled kernel binary to the physical address 0x100000 (the 1MB mark) and jumps into kernel main.'
      ]
    },

    {
      type: 'image',
      src: '/assets/Work/ZenithOS/boot.webp',
      alt: 'Zenith OS Splash Boot Screen',
      caption: 'ZenithOS Splash Boot Screen — High-resolution VESA 1280x1024 mode initialization and kernel banner.'
    },

    // AESTHETICS & GRAPHICS ENGINE
    {
      type: 'heading',
      level: 2,
      content: 'The Visual Subsystem: Anti-Aliased Graphics & Bilinear Font Scaling'
    },
    {
      type: 'paragraph',
      content: 'Most hobby operating systems settle for the standard 80x25 VGA text mode (Mode 03h). ZenithOS renders a modern visual experience directly from raw video memory without any third-party GUI libraries.'
    },
    {
      type: 'paragraph',
      content: 'The display architecture utilizes a double-buffered 1280x1024 software compositor (<code>backbuffer[1280 * 1024]</code>) to eliminate screen flickering. The visual identity is anchored by a warm-beige canvas (<code>0xFAF7F2</code>), a three-stop vertical gradient transitioning into cozy sand (<code>0xECE6DB</code>), warm charcoal typography (<code>0x2C2825</code>), and drop-shadowed card frames.'
    },
    {
      type: 'paragraph',
      content: 'To solve the problem of jagged, pixelated text on high-resolution displays, I engineered a custom <strong>real-time Bilinear Font Scaler</strong>. The engine takes classic 8x16 VGA font glyphs and upscales them smoothly onto a 16x32 pixel grid, interpolating pixel intensities through bilinear weighting to achieve clean, anti-aliased letterforms.'
    },

    {
      type: 'image',
      src: '/assets/Work/ZenithOS/shell.webp',
      alt: 'Zenith OS Interactive User Shell',
      caption: 'ZenithOS Interactive User Shell — Warm beige palette, drop-shadowed window compositing, and bilinear anti-aliased font rendering.'
    },

    // MEMORY ARCHITECTURE & CR3 SANDBOXING
    {
      type: 'heading',
      level: 2,
      content: 'Memory Architecture & Hardware-Enforced Sandboxing'
    },
    {
      type: 'paragraph',
      content: 'Memory safety in ZenithOS is implemented through the x86 hardware Memory Management Unit (MMU) utilizing two-level paging directories. The memory subsystem is partitioned into physical allocation and virtual address spaces:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>Physical Memory Manager (PMM):</strong> Tracks 128MB of physical RAM across 32,768 discrete 4KB frames using a high-efficiency bitmap allocator, allocating user frames safely above the 32MB threshold.',
        '<strong>Virtual Memory Manager (VMM):</strong> Manages 4KB page directories and page tables. The kernel identity-maps the lower 128MB to ensure seamless Ring 0 driver access to MMIO and hardware buffers.',
        '<strong>Ring 0 to Ring 3 Sandboxing:</strong> User applications do not share address spaces. Each task receives an independent page directory pointer loaded into the CPU CR3 register upon context switch.',
        '<strong>Virtual Address Boundary:</strong> User binaries are mapped strictly into virtual memory between 0x40000000 and 0x48000000 with the PAGE_USER attribute set. Any attempt by userland code to read, write, or execute kernel memory (< 1GB) causes the CPU to fire a Page Fault Exception (#PF, interrupt 14), immediately terminating the offending process.'
      ]
    },

    {
      type: 'image',
      src: '/assets/Work/ZenithOS/exploit.webp',
      alt: 'Zenith OS Exploit Verification Suite',
      caption: 'Security & Exploit Verification Suite — Validating hardware memory isolation, pointer checking, and stack canary enforcement.'
    },

    // DEFENSIVE SECURITY & EXPLOIT MITIGATION
    {
      type: 'heading',
      level: 2,
      content: 'Defensive Hardening: Stack Canaries & Syscall Sanitization'
    },
    {
      type: 'paragraph',
      content: 'Security was baked into the architecture from the first commit rather than bolted on as an afterthought:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>Hardware-Seeded Stack Canaries:</strong> The kernel seeds __stack_chk_guard during bootstrap using the CPU timestamp counter via the rdtsc assembly instruction. Any buffer overflow that corrupts the saved return address is intercepted before function epilogue, halting execution with a security panic.',
        '<strong>Syscall Pointer Sanitization:</strong> In syscall_verify_pointer(), all userland pointers passed through int 0x80 are rigorously validated to ensure they reside exclusively within the mapped 0x40000000–0x48000000 user virtual range, preventing malicious Ring 3 apps from tricking the kernel into leaking or overwriting Ring 0 data.',
        '<strong>TOCTOU Guarding:</strong> String arguments passed to system services undergo bounded multi-pass validation to mitigate Time-of-Check to Time-of-Use race conditions.'
      ]
    },

    // CODE BLOCK: POINTER VALIDATION
    {
      type: 'code',
      language: 'c',
      code: `// kernel/syscall.c - Strict userland memory boundary verification
bool syscall_verify_pointer(const void* ptr, uint32_t size) {
    uint32_t start = (uint32_t)ptr;
    uint32_t end = start + size;
    
    // Ensure pointers sit strictly within the User virtual window (1GB to 1GB + 128MB)
    if (start >= 0x40000000 && end <= 0x48000000 && end >= start) {
        uint32_t cr3;
        __asm__ volatile("mov %%cr3, %0" : "=r"(cr3));
        return vmm_is_range_mapped((uint32_t*)cr3, start, size);
    }
    
    serial_print("  [!] syscall_verify_pointer failed: ACCESS_VIOLATION\\n");
    return false;
}`
    },

    // PREEMPTIVE SCHEDULING & CONTEXT SWITCHING
    {
      type: 'heading',
      level: 2,
      content: 'Preemptive Round-Robin Task Scheduler (100Hz)'
    },
    {
      type: 'paragraph',
      content: 'ZenithOS implements true preemptive multi-tasking. The Programmable Interval Timer (PIT, Channel 0) is calibrated to fire IRQ 0 interrupts at 100Hz, allocating each running task a 10ms execution quantum.'
    },
    {
      type: 'paragraph',
      content: 'When a timer tick arrives, the assembly interrupt handler preserves the current task’s execution state by pushing EDI, ESI, EBP, ESP, EBX, EDX, ECX, and EAX onto its stack. The scheduler selects the next runnable thread from the circular task queue, updates the Task State Segment (TSS esp0) with the new task’s kernel stack, reloads the CR3 register with the target page directory, and issues an <code>iret</code> instruction to resume userland execution seamlessly.'
    },

    // ZENITHFS & STORAGE SUBSYSTEM
    {
      type: 'heading',
      level: 2,
      content: 'Storage Subsystem: ATA Driver & ZenithFS'
    },
    {
      type: 'paragraph',
      content: 'Persistent storage is driven by a custom IDE ATA driver operating in PIO (Programmed Input/Output) Mode, communicating directly with I/O ports 0x1F0 through 0x1F7.'
    },
    {
      type: 'paragraph',
      content: 'Layered atop the ATA driver is <strong>ZenithFS</strong>, an original filesystem design consisting of a Superblock, a 64-byte Inode Table (8 inodes packed per 512-byte disk sector), a block allocation bitmap, and contiguous data extents. ZenithFS is abstracted through a Virtual File System (VFS) layer featuring standard UNIX file descriptor tables (<code>open</code>, <code>close</code>, <code>read</code>, <code>write</code>), seamlessly mounting character devices (<code>/dev/keyboard</code>, <code>/dev/console</code>) alongside storage nodes.'
    },

    // USERLAND APPLICATIONS
    {
      type: 'heading',
      level: 2,
      content: 'Userland Application Ecosystem'
    },
    {
      type: 'paragraph',
      content: 'ZenithOS includes a suite of compiled C userland binaries running entirely in Ring 3 privilege mode:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>Interactive Shell (sh.c):</strong> Command processor providing filesystem navigation (ls, cat), real-time process monitoring (ps/top), screen clearing, color theme switching (theme default|matrix|retro|ocean), and system power controls.',
        '<strong>Desktop Calculator (calc.c):</strong> An algebraic parser implementing Dijkstra’s Shunting-Yard algorithm to evaluate expressions with operator precedence, parentheses, decimals, and memory accumulation.',
        '<strong>Exploit Test Suite (exploit.c):</strong> A dedicated security testing harness that systematically attempts kernel pointer reads, syscall boundary overflows, and stack canary smashing to verify system panic handlers.',
        '<strong>Hello World Application (hello.c):</strong> A standalone process binary demonstrating command-line argument passing (argc/argv), dynamic terminal positioning, and theme-coordinated styling.'
      ]
    },

    {
      type: 'image',
      src: '/assets/Work/ZenithOS/calc.webp',
      alt: 'Zenith OS Desktop Calculator Application',
      caption: 'Desktop Calculator Application — Shunting-Yard algebraic expression evaluator running in unprivileged Ring 3.'
    },

    {
      type: 'image',
      src: '/assets/Work/ZenithOS/hello.webp',
      alt: 'Zenith OS Hello Application',
      caption: 'Compiled Hello Application — Dynamic parameter parsing and coordinated visual styling.'
    },

    // HARDWARE POWER MANAGEMENT
    {
      type: 'heading',
      level: 2,
      content: 'Hardware Lifecycle & Power Management'
    },
    {
      type: 'paragraph',
      content: 'ZenithOS implements low-level machine control for system lifecycle management. Issuing the reboot command triggers an immediate CPU hard reset by writing byte 0xFE to the 8042 keyboard controller command port (0x64), pulsing the CPU reset line. Issuing shutdown invokes QEMU ACPI poweroff routines (writing to I/O port 0x604) to cleanly shut down virtual machine hardware.'
    },

    {
      type: 'image',
      src: '/assets/Work/ZenithOS/restart.webp',
      alt: 'Zenith OS System Restart Dialog',
      caption: 'System Restart Dialog — Invoking controlled CPU reset via keyboard controller port 0x64.'
    },

    // ENGINEERING REFLECTIONS & REPO LINK
    {
      type: 'heading',
      level: 2,
      content: 'Reflections & Source Code'
    },
    {
      type: 'paragraph',
      content: 'Developing ZenithOS cemented my belief that true computational intuition is forged at the hardware boundary. Diagnosing triple faults, stepping through assembly interrupts with GDB, and tuning virtual memory tables instills an engineering discipline that permanently alters how you build higher-level software.'
    },
    {
      type: 'paragraph',
      content: 'The complete source code, compilation toolchain, and QEMU simulation scripts are open source and available on GitHub: <a href="https://github.com/cp099/ZenithOS" target="_blank" rel="noopener noreferrer" class="text-cyan underline hover:text-cyan-bright font-medium">github.com/cp099/ZenithOS</a>.'
    }
  ]
};
