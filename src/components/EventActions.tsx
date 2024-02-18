'use client';

import { FunctionComponent } from 'react';
import { Button } from './ui/button';
import { Database } from '../../types/supabase';
import { deleteEvent } from '@/actions/events';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Trash } from '@geist-ui/icons';

interface EventActionsProps {
  event: Database['public']['Tables']['events']['Row'];
}

const EventActions: FunctionComponent<EventActionsProps> = ({ event }) => {
  return (
    <div className="mt-2 flex justify-end">
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="destructive">
            <Trash size={16} />
            <span className="ml-2">Delete</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Do you really want to delete this Event?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteEvent(event.id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EventActions;
