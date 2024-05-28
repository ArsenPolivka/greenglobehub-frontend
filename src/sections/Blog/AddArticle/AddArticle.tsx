import React, { useState } from 'react';

import { Label } from '@/utils/lib/ui/Label';
import { Sheet, SheetTrigger, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/utils/lib/ui/Sheet';
import { Button } from '@/components/Button';
import { createArticle, uploadArticleImage } from '@/api/articles';
import { Input } from '@/components/Input';

type AddArticleProps = {
  refetch: () => void;
  authToken: string;
}

export const AddArticle = ({ refetch, authToken }: AddArticleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!thumbnail || !title || !description) {
      return;
    }

    const { imageUrl } = await uploadArticleImage(thumbnail as Blob)

    await createArticle({
      title,
      description,
      thumbnail: imageUrl,
    }, authToken)

    refetch();
    setIsOpen(false);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setThumbnail(e.target.files[0]);
    }
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button onClick={handleOpen}>Create an article</Button>
      </SheetTrigger>

      {isOpen && (
        <SheetContent className=' bg-[#09090b] text-white border-l-white/40'>
          <form onSubmit={handleSubmit}>
            <SheetHeader>
              <SheetTitle>Create an article</SheetTitle>
              <SheetDescription>
                Fill out the form below to create a new article.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 mt-10 mb-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-left">
                  Title
                </Label>
                <Input id="title" className="!text-white border-white/40 w-full" wrapperClassName='col-span-3' onChangeInput={handleTitleChange}/>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-left">
                  Description
                </Label>
                <Input id="description" className="!text-white border-white/40 w-full" wrapperClassName='col-span-3' onChangeInput={handleDescriptionChange}/>
              </div>
              <div className="mt-2">
                <Label htmlFor="content" className="text-left">
                  Content
                </Label>
                <p className='text-sm font-light'>You can add a content inside the article page*</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-left">
                  Thumbnail
                </Label>
                <Input id="file" type='file' className="!text-white w-full" wrapperClassName='col-span-3' onChangeInput={handleThumbnailChange} />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit" className='w-full'>Save changes</Button>
              <Button onClick={handleClose} type="button" variant='secondary' className='w-full text-white'>Cancel</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      )}
    </Sheet>
  );
};
