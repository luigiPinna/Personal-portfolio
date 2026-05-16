/* shadcn/ui Command — adapted from the official scaffold + the prototype's
 * type rhythm (mono labels, ink hover, monochrome chrome). */
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/lib/utils';

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-lg bg-panel text-ink',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, open, onOpenChange }) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(
          'fixed inset-0 z-[90] backdrop-blur-[6px]',
          'bg-[color-mix(in_oklab,var(--bg)_55%,transparent)]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0'
        )}
      />
      <DialogPrimitive.Content
        className={cn(
          'fixed left-1/2 top-[14vh] z-[91] w-[min(580px,92vw)] -translate-x-1/2',
          'overflow-hidden rounded-lg border border-line-strong bg-panel',
          'shadow-[0_24px_60px_rgba(0,0,0,0.18)]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
          'data-[state=open]:slide-in-from-top-2'
        )}
      >
        <DialogPrimitive.Title className="sr-only">Command palette</DialogPrimitive.Title>
        <DialogPrimitive.Description className="sr-only">
          Navigate and run commands
        </DialogPrimitive.Description>
        <Command className="[&_[cmdk-group-heading]]:px-[18px] [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.14em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-mute [&_[cmdk-input-wrapper]_svg]:hidden">
          {children}
        </Command>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div className="border-b border-line" cmdk-input-wrapper="">
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex w-full bg-transparent px-[18px] py-4 font-mono text-[14px] text-ink outline-none placeholder:text-ink-mute',
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[50vh] overflow-y-auto overflow-x-hidden py-2', className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="px-[18px] py-5 text-center font-mono text-[11px] tracking-[0.14em] uppercase text-ink-mute"
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn('overflow-hidden', className)}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative grid grid-cols-[18px_1fr_auto] items-center gap-3 px-[18px] py-[10px] font-sans text-[14px] text-ink cursor-pointer',
      'data-[selected="true"]:bg-bg-2',
      'data-[disabled="true"]:opacity-50 data-[disabled="true"]:pointer-events-none',
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }) => (
  <span
    className={cn('font-mono text-[11px] text-ink-mute', className)}
    {...props}
  />
);
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
};
